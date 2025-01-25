import { Translations, Phrase } from './types';

/* eslint-disable prettier/prettier */
const ENGLISH: Translations = {
  [Phrase.NoVideosSaved]: 'You have no videos saved for this category',
  [Phrase.FirstTimeHere]: 'If it is your first time here, setup instructions can be found at the link below. If you have problems, please use the Discord #help channel to get support.',
  [Phrase.SetupInstructions]: 'Setup Instructions',
  [Phrase.ClipsDisplayedHere]: 'Videos you clip will be displayed here.',
  [Phrase.NoClipsSaved]: 'You have no clips saved',
  [Phrase.StoragePathDescription]: 'Location to store the recordings. Warcraft Recorder takes ownership of this directory, it should be empty on initial setup and you should not modify the contents in-place.',
  [Phrase.SeparateBufferPathDescription]: 'Enable storing temporary recordings in a seperate location. This should always be a local location. This feature is intended for people who want their final recordings to be on an NFS drive but not incur the network traffic of constantly recording to it.',
  [Phrase.BufferStoragePathDescription]: 'Location to store temporary recordings. If left unset this will default to a folder inside the Storage Path.',
  [Phrase.RetailLogPathDescription]: 'Location of the World of Warcraft logs folder for your retail installation, e.g. "D:\\World of Warcraft\\_retail_\\Logs".',
  [Phrase.ClassicLogPathDescription]: 'Location of the World of Warcraft logs folder for your classic installation, e.g. "D:\\World of Warcraft\\_classic_\\Logs".',
  [Phrase.EraLogPathDescription]: 'Location of the World of Warcraft logs folder for your classic era installation, e.g. "D:\\World of Warcraft\\_classic_era_\\Logs".',
  [Phrase.MaxStorageDescription]: 'Maximum allowed storage that the application will consume for video files. The oldest videos will be deleted one by one to remain under the limit. Recording will not stop. Set to 0 to signify unlimited.',
  [Phrase.MonitorIndexDescription]: 'The monitor to record. Only applicible if monitor capture is selected.',
  [Phrase.SelectedCategoryDescription]: 'Last selected video category in the UI.',
  [Phrase.AudioInputDevicesDescription]: 'Audio input devices to be included in the recording.',
  [Phrase.AudioOutputDevicesDescription]: 'Audio output devices to be included in the recording.',
  [Phrase.MinEncounterDurationDescription]: 'Encounters shorter than this duration will not be recorded. This setting is aimed at avoiding saving boss resets.',
  [Phrase.StartUpDescription]: 'Automatically start the application when Windows starts.',
  [Phrase.StartMinimizedDescription]: 'Open to the Windows system tray.',
  [Phrase.ObsOutputResolutionDescription]: 'Resolution of videos as saved on disk. Set this to the size of your WoW monitor, or less if you want to scale down.',
  [Phrase.ObsFPSDescription]: 'The number of frames per second to record the video at. Lower FPS gives smaller video size, but also more choppy playback.',
  [Phrase.ObsForceMonoDescription]: 'Whether to force the audio of your input device to mono. Enable if your microphone audio is only playing out of one stereo channel.',
  [Phrase.ObsQualityDescription]: 'Quality to record at. Higher quality works your encoder harder and uses more disk space per video.',
  [Phrase.ObsCaptureModeDescription]: 'The capture mode OBS should use to record. See the #faq channel in discord for more details.',
  [Phrase.ObsRecEncoderDescription]: 'The video encoder to use. Hardware encoders are typically preferable, usually giving better performance, but are specific to your graphics card.',
  [Phrase.RecordRetailDescription]: 'Whether the application should record retail.',
  [Phrase.RecordClassicDescription]: 'Whether the application should record classic.',
  [Phrase.RecordEraDescription]: 'Whether the application should record classic era.',
  [Phrase.RecordRaidsDescription]: 'Whether the application should record raids.',
  [Phrase.RecordDungeonsDescription]: 'Whether the application should record Mythic+.',
  [Phrase.RecordTwoVTwoDescription]: 'Whether the application should record 2v2.',
  [Phrase.RecordThreeVThreeDescription]: 'Whether the application should record 3v3.',
  [Phrase.RecordFiveVFiveDescription]: 'Whether the application should record 5v5.',
  [Phrase.RecordSkirmishDescription]: 'Whether the application should record skirmishes.',
  [Phrase.RecordSoloShuffleDescription]: 'Whether the application should record solo shuffle.',
  [Phrase.RecordBattlegroundsDescription]: 'Whether the application should record battlegrounds.',
  [Phrase.CaptureCursorDescription]: 'Whether the cursor should be included in recordings.',
  [Phrase.MinKeystoneLevelDescription]: 'The minimum keystone level to record.',
  [Phrase.MinRaidDifficultyDescription]: 'The minimum raid difficulty to record. Only applies to retail.',
  [Phrase.MinimizeOnQuitDescription]: 'Whether the close button should minimize rather than quit.',
  [Phrase.MinimizeToTrayDescription]: 'Whether the minimize button should minimize to the system tray or the taskbar.',
  [Phrase.ChatOverlayEnabledDescription]: 'If a chat overlay should be added to the scene.',
  [Phrase.ChatOverlayOwnImageDescription]: 'If a custom image should be used as the chat overlay. This feature is only available to Pro users.',
  [Phrase.ChatOverlayOwnImagePathDescription]: 'The PNG file to use as a chat overlay. This feature is only available to Pro users.',
  [Phrase.ChatOverlayWidthDescription]: 'The width of the chat overlay.',
  [Phrase.ChatOverlayHeightDescription]: 'The height of the chat overlay.',
  [Phrase.ChatOverlayScaleDescription]: 'The scale of the chat overlay.',
  [Phrase.ChatOverlayXPositionDescription]: 'The x-position of the chat overlay.',
  [Phrase.ChatOverlayYPositionDescription]: 'The y-position of the chat overlay.',
  [Phrase.SpeakerVolumeDescription]: 'The volume of your speakers in the recording, from 0 to 1.',
  [Phrase.MicVolumeDescription]: 'The volume of your mic in the recording, from 0 to 1.',
  [Phrase.DeathMarkersDescription]: 'Death markers to display on the video timeline.',
  [Phrase.EncounterMarkersDescription]: 'Encounter markers to display on the video timeline.',
  [Phrase.RoundMarkersDescription]: 'Round markers to display on the video timeline.',
  [Phrase.PushToTalkDescription]: 'If the input audio devices should be recorded all the time, or only when a hotkey is held down.',
  [Phrase.PushToTalkKeyDescription]: 'The push to talk hotkey, represented by the key code.',
  [Phrase.PushToTalkMouseButtonDescription]: 'The push to talk mouse button.',
  [Phrase.PushToTalkModifiersDescription]: 'A comma seperated list of modifiers required in conjunction with the push to talk hotkey.',
  [Phrase.ObsAudioSuppressionDescription]: 'Suppress background noise picked up by your microphone, this can help reduce keyboard clacking, breathing, etc.',
  [Phrase.RaidOverrunDescription]: 'Number of seconds to record after a boss has been killed.',
  [Phrase.DungeonOverrunDescription]: 'Number of seconds to record after a dungeon has been completed.',
  [Phrase.CloudStorageDescription]: 'Enable the ability to play videos from the cloud.',
  [Phrase.CloudUploadDescription]: 'Upload your videos to the cloud, this enables both automatic upload on completion of a recording, as well as the ability to manually upload existing videos.',
  [Phrase.CloudUploadRateLimitDescription]: 'If upload to the cloud should be rate limited. Useful if you are finding uploading is causing you to lag.',
  [Phrase.CloudUploadRateLimitMbpsDescription]: 'The upload rate limit in MB/s ',
  [Phrase.CloudAccountNameDescription]: 'Your Warcraft Recorder account username.',
  [Phrase.CloudAccountPasswordDescription]: 'Your Warcraft Recorder account password.',
  [Phrase.CloudGuildNameDescription]: 'The guild or group your account is affiliated with.',
  [Phrase.CloudUpload2v2Description]: 'If 2v2 recordings should be uploaded to the cloud.',
  [Phrase.CloudUpload3v3Description]: 'If 3v3 recordings should be uploaded to the cloud.',
  [Phrase.CloudUpload5v5Description]: 'If 5v5 recordings should be uploaded to the cloud.',
  [Phrase.CloudUploadSkirmishDescription]: 'If skirmish recordings should be uploaded to the cloud.',
  [Phrase.CloudUploadSoloShuffleDescription]: 'If solo shuffle recordings should be uploaded to the cloud.',
  [Phrase.CloudUploadDungeonsDescription]: 'If mythic+ recordings should be uploaded to the cloud.',
  [Phrase.CloudUploadRaidsDescription]: 'If raid encounter recordings should be uploaded to the cloud.',
  [Phrase.CloudUploadBattlegroundsDescription]: 'If battleground recordings should be uploaded to the cloud.',
  [Phrase.CloudUploadRaidMinDifficultyDescription]: 'The minimum raid encounter difficulty for automatic cloud uploading.',
  [Phrase.CloudUploadDungeonMinLevelDescription]: 'The minimum keystone level for automatic cloud uploading.',
  [Phrase.LanguageDescription]: 'The language to use in the application.',
  [Phrase.RecordingsHeading]: 'Recordings',
  [Phrase.SettingsHeading]: 'Settings',
  [Phrase.GeneralButtonText]: 'General',
  [Phrase.SceneButtonText]: 'Scene',
  [Phrase.Version]: 'Version',
  [Phrase.VideoCategoryTwoVTwoLabel]: '2v2',
  [Phrase.VideoCategoryThreeVThreeLabel]: '3v3',
  [Phrase.VideoCategoryFiveVFiveLabel]: '5v5',
  [Phrase.VideoCategorySkirmishLabel]: 'Skirmish',
  [Phrase.VideoCategorySoloShuffleLabel]: 'Solo Shuffle',
  [Phrase.VideoCategoryMythicPlusLabel]: 'Mythic+',
  [Phrase.VideoCategoryRaidsLabel]: 'Raids',
  [Phrase.VideoCategoryBattlegroundsLabel]: 'Battlegrounds',
  [Phrase.VideoCategoryClipsLabel]: 'Clips',
  [Phrase.UpdateAvailableTooltip]: 'An update is available',
  [Phrase.LogsButtonLabel]: 'Logs',
  [Phrase.DiscordButtonLabel]: 'Discord',
  [Phrase.TestButtonUnable]: 'Unable to run a test right now. To run a test, World of Warcraft must be running, your settings must be valid, and you must not currently be in an activity.',
  [Phrase.GeneralSettingsLabel]: 'General Settings',
  [Phrase.DiskStorageFolderLabel]: 'Disk Storage Folder',
  [Phrase.SeparateBufferFolderLabel]: 'Separate Buffer Folder',
  [Phrase.BufferFolderLabel]: 'Buffer Folder',
  [Phrase.MaxDiskStorageLabel]: 'Max Disk Storage (GB)',
  [Phrase.WindowsSettingsLabel]: 'Windows Settings',
  [Phrase.RunOnStartupLabel]: 'Run on Startup',
  [Phrase.StartMinimizedLabel]: 'Start Minimized',
  [Phrase.MinimizeOnQuitLabel]: 'Minimize on Quit',
  [Phrase.MinimizeToTrayLabel]: 'Minimize To Tray',
  [Phrase.LocaleSettingsLabel]: 'Locale Settings',
  [Phrase.LanguageLabel]: 'Language',
  [Phrase.GameSettingsLabel]: 'Game Settings',
  [Phrase.RecordRetailLabel]: 'Record Retail',
  [Phrase.RetailLogPathLabel]: 'Retail Log Path',
  [Phrase.RecordClassicLabel]: 'Record Classic',
  [Phrase.ClassicLogPathLabel]: 'Classic Log Path',
  [Phrase.RecordClassicEraLabel]: 'Record Classic Era',
  [Phrase.ClassicEraLogPathLabel]: 'Classic Era Log Path',
  [Phrase.PVESettingsLabel]: 'PvE Settings',
  [Phrase.RecordRaidsLabel]: 'Record Raids',
  [Phrase.MinimumEncounterDurationLabel]: 'Minimum Encounter Duration (sec)',
  [Phrase.RaidOverrunLabel]: 'Raid Overrun (sec)',
  [Phrase.MinimumRaidDifficultyLabel]: 'Minimum Raid Difficulty',
  [Phrase.RecordMythicPlusLabel]: 'Record Mythic+',
  [Phrase.MinimumKeystoneLevelLabel]: 'Minimum Keystone Level',
  [Phrase.MythicPlusOverrunLabel]: 'Mythic+ Overrun (sec)',
  [Phrase.PVPSettingsLabel]: 'PvP Settings',
  [Phrase.Record2v2Label]: 'Record 2v2',
  [Phrase.Record3v3Label]: 'Record 3v3',
  [Phrase.Record5v5Label]: 'Record 5v5',
  [Phrase.RecordSkirmishLabel]: 'Record Skirmish',
  [Phrase.RecordSoloShuffleLabel]: 'Record Solo Shuffle',
  [Phrase.RecordBattlegroundsLabel]: 'Record Battlegrounds',
  [Phrase.CloudSettingsLabel]: 'Cloud Settings',
  [Phrase.CloudPlaybackLabel]: 'Cloud Playback',
  [Phrase.UserEmailLabel]: 'User or Email',
  [Phrase.PasswordLabel]: 'Password',
  [Phrase.GuildNameLabel]: 'Guild',
  [Phrase.CloudUploadLabel]: 'Cloud Upload',
  [Phrase.UploadRateLimitToggleLabel]: 'Upload Rate Limit',
  [Phrase.UploadRateLimitValueLabel]: 'Upload Rate Limit (MB/s)',
  [Phrase.UploadRaidsLabel]: 'Upload Raids',
  [Phrase.UploadDifficultyThresholdLabel]: 'Upload Difficulty Threshold',
  [Phrase.UploadMythicPlusLabel]: 'Upload Mythic+',
  [Phrase.UploadLevelThresholdLabel]: 'Upload Level Threshold',
  [Phrase.Upload2v2Label]: 'Upload 2v2',
  [Phrase.Upload3v3Label]: 'Upload 3v3',
  [Phrase.Upload5v5Label]: 'Upload 5v5',
  [Phrase.UploadSkirmishLabel]: 'Upload Skirmish',
  [Phrase.UploadSoloShuffleLabel]: 'Upload Solo Shuffle',
  [Phrase.UploadBattlgroundsLabel]: 'Upload Battlegrounds',
  [Phrase.SettingsDisabledText]: 'These settings cannot be modified while a recording is active.',
  [Phrase.SomeSettingsDisabledText]: 'Some settings in this category are currently hidden as they cannot be modified while a recording is active.',
  [Phrase.InvalidRetailLogPathText]: 'Invalid retail log path',
  [Phrase.InvalidClassicLogPathText]: 'Invalid classic log path.',
  [Phrase.InvalidClassicEraLogPathText]: 'Invalid classic era log path.',
  [Phrase.CannotBeEmpty]: 'Cannot be empty',
  [Phrase.OneOrGreater]: 'Must be 1 or greater',
  [Phrase.SourceHeading]: 'Source',
  [Phrase.VideoHeading]: 'Video',
  [Phrase.AudioHeading]: 'Audio',
  [Phrase.OverlayHeading]: 'Overlay',
  [Phrase.CaptureModeLabel]: 'Capture Mode',
  [Phrase.WindowCaptureValue]: 'Window',
  [Phrase.GameCaptureValue]: 'Game',
  [Phrase.MonitorCaptureValue]: 'Monitor',
  [Phrase.MonitorLabel]: 'Monitor',
  [Phrase.CaptureCursorLabel]: 'Capture Cursor',
  [Phrase.FPSLabel]: 'FPS',
  [Phrase.CanvasResolutionLabel]: 'Canvas Resolution',
  [Phrase.QualityLabel]: 'Quality',
  [Phrase.VideoEncoderLabel]: 'Video Encoder',
  [Phrase.SpeakersLabel]: 'Speakers',
  [Phrase.MicrophonesLabel]: 'Microphones',
  [Phrase.AudioSuppressionLabel]: 'Audio Suppression',
  [Phrase.MonoInputLabel]: 'Mono Input',
  [Phrase.PushToTalkLabel]: 'Push To Talk',
  [Phrase.PushToTalkKeyLabel]: 'Push To Talk Key',
  [Phrase.PressAnyKeyCombination]: 'Press any key combination...',
  [Phrase.ClickToBind]: 'Click to bind',
  [Phrase.ClickToRebind]: 'Click to rebind',
  [Phrase.Mouse]: 'Mouse',
  [Phrase.ChatOverlayLabel]: 'Chat Overlay',
  [Phrase.OwnImageLabel]: 'Own Image',
  [Phrase.ImagePathLabel]: 'Image Path',
  [Phrase.WidthLabel]: 'Width',
  [Phrase.HeightLabel]: 'Height',
  [Phrase.HorizontalLabel]: 'Horizontal',
  [Phrase.VerticalLabel]: 'Vertical',
  [Phrase.ScaleLabel]: 'Scale',
  [Phrase.TableHeaderEncounter]: 'Encounter',
  [Phrase.TableHeaderResult]: 'Result',
  [Phrase.TableHeaderPull]: 'Pull',
  [Phrase.TableHeaderDifficulty]: 'Difficulty',
  [Phrase.TableHeaderDuration]: 'Duration',
  [Phrase.TableHeaderDate]: 'Date',
  [Phrase.TableHeaderViewpoints]: 'Viewpoints',
  [Phrase.TableHeaderMap]: 'Map',
  [Phrase.TableHeaderType]: 'Type',
  [Phrase.TableHeaderTag]: 'Tag',
  [Phrase.SearchLabel]: 'Search',
  [Phrase.SearchSuggestionMythicPlus]: 'Try: timed temple yesterday +18 priest bookmarked fortified',
  [Phrase.SearchSuggestionRaid]: 'Try: kill today retail mythic destruction bookmarked',
  [Phrase.SearchSuggestionBattlegrounds]: 'Try: warsong gulch bookmarked',
  [Phrase.SearchSuggestionSoloShuffle]: 'Try: dalaran 6-0 bookmarked',
  [Phrase.SearchSuggestionDefault]: 'Try: win enigma crucible arcane bookmarked',
  [Phrase.ShowRoundsLabel]: 'Show Rounds',
  [Phrase.ShowDeathsLabel]: 'Show Deaths',
  [Phrase.ShowEncountersLabel]: 'Show Encounters',
  [Phrase.FullScreenTooltip]: 'Fullscreen',
  [Phrase.PlaybackSpeedTooltip]: 'Playback Speed',
  [Phrase.ClipTooltip]: 'Clip',
  [Phrase.ClipUnavailableTooltip]: 'You can only clip locally saved videos',
  [Phrase.ConfirmTooltip]: 'Confirm',
  [Phrase.CancelTooltip]: 'Cancel',
  [Phrase.TagButtonTooltip]: 'Add a tag',
  [Phrase.StarButtonTooltip]: 'Never age out',
  [Phrase.UnstarButtonTooltip]: 'Age out',
  [Phrase.OpenFolderButtonTooltip]: 'Open location',
  [Phrase.DeleteButtonTooltip]: 'Delete',
  [Phrase.BulkDeleteButtonTooltip]: 'Delete selected',
  [Phrase.ShareLinkButtonTooltip]: 'Get shareable link',
  [Phrase.CloudButtonTooltip]: 'Use cloud version',
  [Phrase.DiskButtonTooltip]: 'Use local disk version',
  [Phrase.UploadButtonTooltip]: 'Upload to cloud',
  [Phrase.DownloadButtonTooltip]: 'Download to disk',
  [Phrase.StatusTitleRecording]: 'Recording',
  [Phrase.StatusTitleWaiting]: 'Waiting',
  [Phrase.StatusTitleInvalid]: 'Invalid',
  [Phrase.StatusTitleReady]: 'Ready',
  [Phrase.StatusTitleFatalError]: 'Error',
  [Phrase.StatusTitleOverrunning]: 'Overrunning',
  [Phrase.StatusTitleReconfiguring]: 'Reconfiguring',
  [Phrase.StatusDescriptionRecording]: 'Warcraft Recorder is currently recording',
  [Phrase.StatusDescriptionForceEnd]: 'You can force the recording to end. Normally this should not be required. This can help end a failed Mythic+ run that would otherwise need a few minutes to wrap up.',
  [Phrase.StatusDescriptionWaiting]: 'Waiting for World of Warcraft to start',
  [Phrase.StatusDescriptionConfiguredToRecord]: 'Warcraft Recorder is configured to record',
  [Phrase.StatusDescriptionMisconfigured]: 'Warcraft Recorder is misconfigured',
  [Phrase.StatusDescriptionResolveError]: 'Please resolve the error below',
  [Phrase.StatusDescriptionDetectedRunning]: 'Detected World of Warcraft is running',
  [Phrase.StatusDescriptionWatchingLogs]: 'Warcraft Recorder is waiting for a recordable event to appear in the combat log. Watching log paths',
  [Phrase.StatusDescriptionTip]: 'Tip',
  [Phrase.StatusDescriptionIfNoRecording]: 'If recordings do not start, check your logging settings in-game and confirm your log path configuration is correct.',
  [Phrase.StatusDescriptionFatalError]: 'Warcraft Recorder has hit a fatal error',
  [Phrase.StatusDescriptionPleaseResolve]: 'Please try to resolve the error below, then restart the application.',
  [Phrase.StatusDescriptionIfRecurring]: 'If this problem is recurring, please ask for help in Discord. See the pins in the #help channel for advice on getting help.',
  [Phrase.StatusDescriptionOverrunning]: 'Warcraft Recorder has detected an activity has completed successfuly and is recording a few seconds extra to catch the aftermath.',
  [Phrase.StatusDescriptionNothing]: 'nothing. You likely want to enable some game modes in the game settings tab.',
  [Phrase.StatusHeading]: 'Status',
  [Phrase.StatusButtonForceEndLabel]: 'Force Stop',
  [Phrase.Retail]: 'Retail',
  [Phrase.Classic]: 'Classic',
  [Phrase.Era]: 'Era',
  [Phrase.MicListeningTooltip]: 'Listening',
  [Phrase.MicMutedTooltip]: 'Muted',
  [Phrase.CrashHappenedText]: 'An OBS crash has occured and has been recovered from. This should not happen in normal operation. You may wish to seek help by sharing your WR and OBS logs in discord.',
  [Phrase.SettingsPageApplicationHeader]: 'Application',
  [Phrase.SettingsPageGameHeader]: 'Game',
  [Phrase.SettingsPageProHeader]: 'Pro',
  [Phrase.UpdateAvailableTitle]: 'Update available!',
  [Phrase.UpdateAvailableText]: 'There is an update available for Warcraft Recorder. Please click the button below to download it.',
  [Phrase.UpdateAvailableDownloadButtonText]: 'Download',
  [Phrase.TestButtonHeading]: 'Select a category to test',
  [Phrase.SystemTrayOpen]: 'Open',
  [Phrase.SystemTrayQuit]: 'Quit',
  [Phrase.Kill]: 'Kill',
  [Phrase.Wipe]: 'Wipe',
  [Phrase.Win]: 'Win',
  [Phrase.Loss]: 'Loss',
  [Phrase.Abandoned]: 'Abandoned',
  [Phrase.Depleted]: 'Depleted',
  [Phrase.AreYouSure]: 'Are you sure?',
  [Phrase.ThisWillPermanentlyDelete]: 'This will permanently delete',
  [Phrase.RecordingsFullStop]: 'recording(s).',
  [Phrase.ThisSelectionIncludes]: 'The selection includes',
  [Phrase.StarredRecordingNotDeleted]: 'starred recording(s) which will not be deleted.',
  [Phrase.Hold]: 'Hold',
  [Phrase.ToSkip]: 'to skip this prompt in future.',
  [Phrase.Death]: 'Death',
  [Phrase.AddADescription]: 'Add a Description',
  [Phrase.TagDialogText]: 'This description is queryable in the search bar.',
  [Phrase.Clear]: 'Clear',
  [Phrase.Save]: 'Save',
  [Phrase.ShareableLinkTitle]: 'Shareable link generated and placed in clipboard',
  [Phrase.ShareableLinkText]: 'This link will be valid for up to 30 days',
  [Phrase.ShareableLinkFailedTitle]: 'Failed to generate link',
  [Phrase.ShareableLinkFailedText]: 'Please see logs for more details',
  [Phrase.CloudUsage]: 'Cloud usage',
  [Phrase.DiskUsage]: 'Disk usage',
  [Phrase.Hardware]: 'Hardware',
  [Phrase.Software]: 'Software',
  [Phrase.All]: 'All',
  [Phrase.Own]: 'Own',
  [Phrase.None]: 'None',
  [Phrase.On]: 'On',
  [Phrase.Off]: 'Off',
  [Phrase.Ultra]: 'Ultra',
  [Phrase.High]: 'High',
  [Phrase.Moderate]: 'Moderate',
  [Phrase.Low]: 'Low',
  [Phrase.LFR]: 'Lfr',
  [Phrase.Normal]: 'Normal',
  [Phrase.Heroic]: 'Heroic',
  [Phrase.Mythic]: 'Mythic',
  [Phrase.Pvp]: 'PVP',
  [Phrase.ErrorAccountEmpty]: 'Account name must not be empty.',
  [Phrase.ErrorPasswordEmpty]: 'Account Password must not be empty.',
  [Phrase.ErrorGuildEmpty]: 'Guild name must not be empty.',
  [Phrase.ErrorUserNotAuthorizedPlayback]: 'User is not authorized to access the guild.',
  [Phrase.ErrorUserNotAuthorizedUpload]: 'User is not authorized to upload to the guild.',
  [Phrase.ErrorStoragePathInvalid]: 'Storage path is invalid.',
  [Phrase.ErrorBufferPathInvalid]: 'Buffer Storage Path is invalid.',
  [Phrase.ErrorStoragePathSameAsBufferPath]: 'Storage Path is the same as Buffer Path.',
  [Phrase.ErrorCustomOverlayNotAllowed]: 'To use a custom overlay, enable cloud storage.',
  [Phrase.ErrorNoCustomImage]: 'Overlay image was not provided for custom overlay.',
  [Phrase.ErrorCustomImageFileType]: 'Overlay image must be a .png or .gif file.',
  [Phrase.ErrorCustomImageNotExist]: 'Specified file does not exist.',
  [Phrase.InvalidRetailLogPath]: 'Invalid retail log path.',
  [Phrase.InvalidClassicLogPath]: 'Invalid classic log path.',
  [Phrase.InvalidEraLogPath]: 'Invalid classic era log path.',
  [Phrase.SelectAnOutputDevice]: 'Select an output device',
  [Phrase.SelectAnInputDevice]: 'Select an input device',
  [Phrase.ClickToSelectAll]: 'Click to select all',
  [Phrase.ClickToSortAsc]: 'Click to sort ascending',
  [Phrase.ClickToSortDec]: 'Click to sort descending',
  [Phrase.ClickToClearSort]: 'Click to clear sort',
  [Phrase.Start]: 'Start',
  [Phrase.End]: 'End',
  [Phrase.Cloud]: "Cloud",
  [Phrase.Disk]: "Disk",
  [Phrase.Starred]: "Starred",
  [Phrase.Tagged]: "Tagged",
  [Phrase.Today]: "Today",
  [Phrase.Yesterday]: "Yesterday",
  [Phrase.Chests]: "Chests",
  [Phrase.Timed]: "Timed",
};

export default ENGLISH;