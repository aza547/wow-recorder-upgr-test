import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  CrashData,
  Crashes,
  MicStatus,
  Pages,
  RecStatus,
  SaveStatus,
  AppState,
  UpgradeStatus,
  RendererVideo,
} from 'main/types';
import Box from '@mui/material/Box';
import Layout from './Layout';
import RendererTitleBar from './RendererTitleBar';
import BottomStatusBar from './BottomStatusBar';
import './App.css';
import { useSettings } from './useSettings';
import { getCategoryFromConfig } from './rendererutils';

const ipc = window.electron.ipcRenderer;

const WarcraftRecorder = () => {
  const [config] = useSettings();
  const [error, setError] = useState<string>('');
  const [videoState, setVideoState] = useState<RendererVideo[]>([]);
  const [micStatus, setMicStatus] = useState<MicStatus>(MicStatus.NONE);
  const [crashes, setCrashes] = useState<Crashes>([]);

  const [recorderStatus, setRecorderStatus] = useState<RecStatus>(
    RecStatus.WaitingForWoW
  );

  const [upgradeStatus, setUpgradeStatus] = useState<UpgradeStatus>({
    available: false,
    link: undefined,
  });

  const [savingStatus, setSavingStatus] = useState<SaveStatus>(
    SaveStatus.NotSaving
  );

  const [appState, setAppState] = useState<AppState>({
    // Navigation.
    page: Pages.None,
    category: getCategoryFromConfig(config),
    playingVideo: undefined,
    selectedVideoName: undefined,

    // Limit the number of videos displayed for performance. User can load more
    // by clicking the button, but mainline case will be to watch back recent
    // videos.
    numVideosDisplayed: 10,

    // Any text applied in the filter bar gets translated into a filter here.
    videoFilterQuery: '',

    // We use this to conditionally hide the recording preview.
    videoFullScreen: false,
  });

  // Used to allow for hot switching of video players when moving between POVs.
  const persistentProgress = useRef(0);

  const doRefresh = async () => {
    const state = (await ipc.invoke('getVideoState', [])) as RendererVideo[];
    setVideoState(state);

    setAppState((prevState) => {
      return {
        ...prevState,
        // Fixes issue 410 which caused the preview not to re-appear if
        // refreshState triggered when full screen.
        videoFullScreen: false,
      };
    });
  };

  const updateRecStatus = (status: unknown, err: unknown) => {
    setRecorderStatus(status as RecStatus);

    if (status === RecStatus.InvalidConfig || status === RecStatus.FatalError) {
      setError(err as string);
    }
  };

  const updateSaveStatus = (status: unknown) => {
    setSavingStatus(status as SaveStatus);
  };

  const updateUpgradeStatus = (available: unknown, link: unknown) => {
    setUpgradeStatus({
      available: available as boolean,
      link: link as string,
    });
  };

  const updateMicStatus = (status: unknown) => {
    setMicStatus(status as MicStatus);
  };

  const updateCrashes = (crash: unknown) => {
    setCrashes((prevArray) => [...prevArray, crash as CrashData]);
  };

  useEffect(() => {
    ipc.on('refreshState', doRefresh);
    ipc.on('updateRecStatus', updateRecStatus);
    ipc.on('updateSaveStatus', updateSaveStatus);
    ipc.on('updateUpgradeStatus', updateUpgradeStatus);
    ipc.on('updateMicStatus', updateMicStatus);
    ipc.on('updateCrashes', updateCrashes);
  }, []);

  return (
    <Box
      id="main-box"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <RendererTitleBar />
      <Layout
        recorderStatus={recorderStatus}
        videoState={videoState}
        appState={appState}
        setAppState={setAppState}
        persistentProgress={persistentProgress}
      />
      <BottomStatusBar
        recorderStatus={recorderStatus}
        error={error}
        upgradeStatus={upgradeStatus}
        savingStatus={savingStatus}
        micStatus={micStatus}
        crashes={crashes}
      />
    </Box>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarcraftRecorder />} />
      </Routes>
    </Router>
  );
}
