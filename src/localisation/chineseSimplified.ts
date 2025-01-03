import { Translations, Phrase } from './types';

/* eslint-disable prettier/prettier */
const CHINESE_SIMPLIFIED: Translations = {
  [Phrase.NoVideosSaved]: '你还没有为此分类保存任何视频',
  [Phrase.FirstTimeHere]: '如果这是你第一次使用，下面的链接中可以找到设置说明。如果你遇到问题，请在 Discord 的 #help 频道寻求支持。',
  [Phrase.SetupInstructions]: '设置说明',
  [Phrase.ClipsDisplayedHere]: '你剪辑的视频将显示在这里。',
  [Phrase.NoClipsSaved]: '你还没有保存任何剪辑',
  [Phrase.StoragePathDescription]: '用于存储录制文件的位置。Warcraft Recorder 将对该目录进行管理，初始设置时应为空，请勿在其中直接修改内容。',
  [Phrase.SeparateBufferPathDescription]: '启用在另一个位置存储临时录制文件。此位置应始终是本地目录。该功能主要给那些想把最终录制文件存放到网络存储（NFS）但又不想一直通过网络写入的人使用。',
  [Phrase.BufferStoragePathDescription]: '存储临时录制文件的位置。如果未设置，默认为存储路径下的一个文件夹。',
  [Phrase.RetailLogPathDescription]: '你魔兽世界正式服安装目录的 Logs 文件夹路径，例如 "D:\\World of Warcraft\\_retail_\\Logs"。',
  [Phrase.ClassicLogPathDescription]: '你魔兽世界怀旧服安装目录的 Logs 文件夹路径，例如 "D:\\World of Warcraft\\_classic_\\Logs"。',
  [Phrase.EraLogPathDescription]: '你魔兽世界经典旧世服安装目录的 Logs 文件夹路径，例如 "D:\\World of Warcraft\\_classic_era_\\Logs"。',
  [Phrase.MaxStorageDescription]: '应用程序可用于视频文件的最大存储容量。为了保持在此限制内，旧视频将按顺序被删除，但录制不会停止。如果设置为 0，则表示不限制。',
  [Phrase.MonitorIndexDescription]: '需要录制的显示器序号，仅在选择屏幕捕获模式时有效。',
  [Phrase.SelectedCategoryDescription]: '界面中最后选择的视频分类。',
  [Phrase.AudioInputDevicesDescription]: '录制中包含的音频输入设备。',
  [Phrase.AudioOutputDevicesDescription]: '录制中包含的音频输出设备。',
  [Phrase.MinEncounterDurationDescription]: '低于此时长的首领战不会被录制。此设置旨在避免保存首领战的快速重置。',
  [Phrase.StartUpDescription]: 'Windows 启动时自动启动此应用程序。',
  [Phrase.StartMinimizedDescription]: '应用程序以最小化托盘的形式打开。',
  [Phrase.ObsOutputResolutionDescription]: '视频在硬盘上保存时的分辨率。可设置为魔兽世界所用显示器的大小，或者更低的分辨率以缩小视频。',
  [Phrase.ObsFPSDescription]: '录制视频的帧率。较低的帧率会减小视频体积，但回放画面也会更加卡顿。',
  [Phrase.ObsForceMonoDescription]: '是否将音频输入设备强制为单声道。如果你的麦克风声音只从一个立体声声道输出，请启用此选项。',
  [Phrase.ObsQualityDescription]: '录制质量。更高的质量会增加对编码器的压力，并且会产生更大的视频文件。',
  [Phrase.ObsCaptureModeDescription]: 'OBS 用于录制的捕获模式。更多详细信息可见 Discord 中的 #faq 频道。',
  [Phrase.ObsRecEncoderDescription]: '要使用的视频编码器。通常来说，硬件编码器表现更好，但它依赖于你的显卡。',
  [Phrase.RecordRetailDescription]: '是否录制正式服。',
  [Phrase.RecordClassicDescription]: '是否录制怀旧服。',
  [Phrase.RecordEraDescription]: '是否录制经典旧世服。',
  [Phrase.RecordRaidsDescription]: '是否录制团队副本。',
  [Phrase.RecordDungeonsDescription]: '是否录制大秘境。',
  [Phrase.RecordTwoVTwoDescription]: '是否录制 2v2。',
  [Phrase.RecordThreeVThreeDescription]: '是否录制 3v3。',
  [Phrase.RecordFiveVFiveDescription]: '是否录制 5v5。',
  [Phrase.RecordSkirmishDescription]: '是否录制练习赛。',
  [Phrase.RecordSoloShuffleDescription]: '是否录制单排竞技场。',
  [Phrase.RecordBattlegroundsDescription]: '是否录制战场。',
  [Phrase.CaptureCursorDescription]: '是否在录制中包含鼠标光标。',
  [Phrase.MinKeystoneLevelDescription]: '需要录制的大秘境最低钥石等级。',
  [Phrase.MinRaidDifficultyDescription]: '要录制的最低团队副本难度（仅适用于正式服）。',
  [Phrase.MinimizeOnQuitDescription]: '当点击关闭按钮时，是否将程序最小化而不是退出。',
  [Phrase.MinimizeToTrayDescription]: '当点击最小化按钮时，是否最小化到系统托盘而不是任务栏。',
  [Phrase.ChatOverlayEnabledDescription]: '是否在场景中添加一个聊天覆盖层。',
  [Phrase.ChatOverlayOwnImageDescription]: '是否使用自定义图像作为聊天覆盖层。此功能仅对 Pro 用户开放。',
  [Phrase.ChatOverlayOwnImagePathDescription]: '用作聊天覆盖层的 PNG 文件。此功能仅对 Pro 用户开放。',
  [Phrase.ChatOverlayWidthDescription]: '聊天覆盖层的宽度。',
  [Phrase.ChatOverlayHeightDescription]: '聊天覆盖层的高度。',
  [Phrase.ChatOverlayScaleDescription]: '聊天覆盖层的缩放比例。',
  [Phrase.ChatOverlayXPositionDescription]: '聊天覆盖层的 X 位置。',
  [Phrase.ChatOverlayYPositionDescription]: '聊天覆盖层的 Y 位置。',
  [Phrase.SpeakerVolumeDescription]: '录制中扬声器的音量（0 到 1）。',
  [Phrase.MicVolumeDescription]: '录制中麦克风的音量（0 到 1）。',
  [Phrase.DeathMarkersDescription]: '在视频时间轴上显示的死亡标记。',
  [Phrase.EncounterMarkersDescription]: '在视频时间轴上显示的首领战标记。',
  [Phrase.RoundMarkersDescription]: '在视频时间轴上显示的回合标记。',
  [Phrase.PushToTalkDescription]: '音频输入设备是否一直录音，还是只在按住热键时录音。',
  [Phrase.PushToTalkKeyDescription]: '按键说话热键的键值代码。',
  [Phrase.PushToTalkMouseButtonDescription]: '按键说话的鼠标按键。',
  [Phrase.PushToTalkModifiersDescription]: '设置需要与按键说话热键一起按下的修饰键（用逗号分隔）。',
  [Phrase.ObsAudioSuppressionDescription]: '抑制麦克风拾取的背景噪音，这有助于减少键盘敲击、呼吸声等。',
  [Phrase.RaidOverrunDescription]: '击杀首领后额外录制的秒数。',
  [Phrase.DungeonOverrunDescription]: '完成大秘境后额外录制的秒数。',
  [Phrase.CloudStorageDescription]: '启用从云端播放视频的功能。',
  [Phrase.CloudUploadDescription]: '将录制的视频上传到云端，这既支持在录制完成后自动上传，也允许手动上传现有视频。',
  [Phrase.CloudUploadRateLimitDescription]: '是否对上传云端进行速率限制。如果上传导致游戏延迟，可以考虑启用。',
  [Phrase.CloudUploadRateLimitMbpsDescription]: '上传速率限制（MB/s）',
  [Phrase.CloudAccountNameDescription]: '你的 Warcraft Recorder 账号用户名。',
  [Phrase.CloudAccountPasswordDescription]: '你的 Warcraft Recorder 账号密码。',
  [Phrase.CloudGuildNameDescription]: '你的账号所属的公会或团队名称。',
  [Phrase.CloudUpload2v2Description]: '是否将 2v2 的录制文件自动上传至云端。',
  [Phrase.CloudUpload3v3Description]: '是否将 3v3 的录制文件自动上传至云端。',
  [Phrase.CloudUpload5v5Description]: '是否将 5v5 的录制文件自动上传至云端。',
  [Phrase.CloudUploadSkirmishDescription]: '是否将练习赛的录制文件自动上传至云端。',
  [Phrase.CloudUploadSoloShuffleDescription]: '是否将单排竞技场的录制文件自动上传至云端。',
  [Phrase.CloudUploadDungeonsDescription]: '是否将大秘境的录制文件自动上传至云端。',
  [Phrase.CloudUploadRaidsDescription]: '是否将团队副本首领战的录制文件自动上传至云端。',
  [Phrase.CloudUploadBattlegroundsDescription]: '是否将战场录制文件自动上传至云端。',
  [Phrase.CloudUploadRaidMinDifficultyDescription]: '自动上传团队副本时要求的最低难度。',
  [Phrase.CloudUploadDungeonMinLevelDescription]: '自动上传大秘境时要求的最低钥石等级。',
  [Phrase.LanguageDescription]: '应用程序使用的语言。',
  [Phrase.RecordingsHeading]: '录制文件',
  [Phrase.SettingsHeading]: '设置',
  [Phrase.GeneralButtonText]: '常规',
  [Phrase.SceneButtonText]: '场景',
  [Phrase.Version]: '版本',
  [Phrase.VideoCategoryTwoVTwoLabel]: '2v2',
  [Phrase.VideoCategoryThreeVThreeLabel]: '3v3',
  [Phrase.VideoCategoryFiveVFiveLabel]: '5v5',
  [Phrase.VideoCategorySkirmishLabel]: '练习赛',
  [Phrase.VideoCategorySoloShuffleLabel]: '单排',
  [Phrase.VideoCategoryMythicPlusLabel]: '大秘境',
  [Phrase.VideoCategoryRaidsLabel]: '团队副本',
  [Phrase.VideoCategoryBattlegroundsLabel]: '战场',
  [Phrase.VideoCategoryClipsLabel]: '剪辑',
  [Phrase.UpdateAvailableTooltip]: '有可用更新',
  [Phrase.LogsButtonLabel]: '日志',
  [Phrase.DiscordButtonLabel]: 'Discord',
  [Phrase.TestButtonUnable]: '目前无法进行测试。要运行测试，魔兽世界必须在运行，设置必须正确，并且你不能处于任何活动中。',
  [Phrase.GeneralSettingsLabel]: '常规设置',
  [Phrase.DiskStorageFolderLabel]: '磁盘存储文件夹',
  [Phrase.SeparateBufferFolderLabel]: '独立的缓冲文件夹',
  [Phrase.BufferFolderLabel]: '缓冲文件夹',
  [Phrase.MaxDiskStorageLabel]: '磁盘存储上限 (GB)',
  [Phrase.WindowsSettingsLabel]: 'Windows 设置',
  [Phrase.RunOnStartupLabel]: '开机自动启动',
  [Phrase.StartMinimizedLabel]: '启动时最小化',
  [Phrase.MinimizeOnQuitLabel]: '关闭时最小化',
  [Phrase.MinimizeToTrayLabel]: '最小化到托盘',
  [Phrase.LocaleSettingsLabel]: '语言设置',
  [Phrase.LanguageLabel]: '语言',
  [Phrase.GameSettingsLabel]: '游戏设置',
  [Phrase.RecordRetailLabel]: '录制正式服',
  [Phrase.RetailLogPathLabel]: '正式服日志路径',
  [Phrase.RecordClassicLabel]: '录制怀旧服',
  [Phrase.ClassicLogPathLabel]: '怀旧服日志路径',
  [Phrase.RecordClassicEraLabel]: '录制经典旧世服',
  [Phrase.ClassicEraLogPathLabel]: '经典旧世服日志路径',
  [Phrase.PVESettingsLabel]: 'PvE 设置',
  [Phrase.RecordRaidsLabel]: '录制团队副本',
  [Phrase.MinimumEncounterDurationLabel]: '首领战最短时长 (秒)',
  [Phrase.RaidOverrunLabel]: '团队副本额外录制 (秒)',
  [Phrase.MinimumRaidDifficultyLabel]: '最低团队副本难度',
  [Phrase.RecordMythicPlusLabel]: '录制大秘境',
  [Phrase.MinimumKeystoneLevelLabel]: '最低钥石等级',
  [Phrase.MythicPlusOverrunLabel]: '大秘境额外录制 (秒)',
  [Phrase.PVPSettingsLabel]: 'PvP 设置',
  [Phrase.Record2v2Label]: '录制 2v2',
  [Phrase.Record3v3Label]: '录制 3v3',
  [Phrase.Record5v5Label]: '录制 5v5',
  [Phrase.RecordSkirmishLabel]: '录制练习赛',
  [Phrase.RecordSoloShuffleLabel]: '录制单排竞技场',
  [Phrase.RecordBattlegroundsLabel]: '录制战场',
  [Phrase.CloudSettingsLabel]: '云端设置',
  [Phrase.CloudPlaybackLabel]: '云端回放',
  [Phrase.UserEmailLabel]: '用户或邮箱',
  [Phrase.PasswordLabel]: '密码',
  [Phrase.GuildNameLabel]: '公会名称',
  [Phrase.CloudUploadLabel]: '云端上传',
  [Phrase.UploadRateLimitToggleLabel]: '上传速率限制',
  [Phrase.UploadRateLimitValueLabel]: '上传速率限制 (MB/s)',
  [Phrase.UploadRaidsLabel]: '上传团队副本',
  [Phrase.UploadDifficultyThresholdLabel]: '上传难度阈值',
  [Phrase.UploadMythicPlusLabel]: '上传大秘境',
  [Phrase.UploadLevelThresholdLabel]: '上传钥石等级阈值',
  [Phrase.Upload2v2Label]: '上传 2v2',
  [Phrase.Upload3v3Label]: '上传 3v3',
  [Phrase.Upload5v5Label]: '上传 5v5',
  [Phrase.UploadSkirmishLabel]: '上传练习赛',
  [Phrase.UploadSoloShuffleLabel]: '上传单排',
  [Phrase.UploadBattlgroundsLabel]: '上传战场',
  [Phrase.SettingsDisabledText]: '在录制进行时，无法修改这些设置。',
  [Phrase.SomeSettingsDisabledText]: '此分类中的部分设置在录制进行时会被隐藏，无法修改。',
  [Phrase.InvalidRetailLogPathText]: '无效的正式服日志路径',
  [Phrase.InvalidClassicLogPathText]: '无效的怀旧服日志路径。',
  [Phrase.InvalidClassicEraLogPathText]: '无效的经典旧世服日志路径。',
  [Phrase.CannotBeEmpty]: '不能为空',
  [Phrase.OneOrGreater]: '必须大于或等于 1',
  [Phrase.SourceHeading]: '来源',
  [Phrase.VideoHeading]: '视频',
  [Phrase.AudioHeading]: '音频',
  [Phrase.OverlayHeading]: '覆盖层',
  [Phrase.CaptureModeLabel]: '捕获模式',
  [Phrase.WindowCaptureValue]: '窗口',
  [Phrase.GameCaptureValue]: '游戏',
  [Phrase.MonitorCaptureValue]: '显示器',
  [Phrase.MonitorLabel]: '显示器',
  [Phrase.CaptureCursorLabel]: '捕获鼠标光标',
  [Phrase.FPSLabel]: '帧率 (FPS)',
  [Phrase.CanvasResolutionLabel]: '画布分辨率',
  [Phrase.QualityLabel]: '质量',
  [Phrase.VideoEncoderLabel]: '视频编码器',
  [Phrase.SpeakersLabel]: '扬声器',
  [Phrase.MicrophonesLabel]: '麦克风',
  [Phrase.AudioSuppressionLabel]: '音频抑制',
  [Phrase.MonoInputLabel]: '单声道输入',
  [Phrase.PushToTalkLabel]: '按键说话',
  [Phrase.PushToTalkKeyLabel]: '按键说话键',
  [Phrase.PressAnyKeyCombination]: '按任意键组合...',
  [Phrase.ClickToBind]: '点击绑定',
  [Phrase.ClickToRebind]: '点击重新绑定',
  [Phrase.Mouse]: '鼠标',
  [Phrase.ChatOverlayLabel]: '聊天覆盖层',
  [Phrase.OwnImageLabel]: '自定义图像',
  [Phrase.ImagePathLabel]: '图像路径',
  [Phrase.WidthLabel]: '宽度',
  [Phrase.HeightLabel]: '高度',
  [Phrase.HorizontalLabel]: '水平',
  [Phrase.VerticalLabel]: '垂直',
  [Phrase.ScaleLabel]: '缩放',
  [Phrase.TableHeaderEncounter]: '首领',
  [Phrase.TableHeaderResult]: '结果',
  [Phrase.TableHeaderPull]: '尝试次数',
  [Phrase.TableHeaderDifficulty]: '难度',
  [Phrase.TableHeaderDuration]: '时长',
  [Phrase.TableHeaderDate]: '日期',
  [Phrase.TableHeaderViewpoints]: '视角',
  [Phrase.TableHeaderMap]: '地图',
  [Phrase.TableHeaderType]: '类型',
  [Phrase.TableHeaderTag]: '标签',
  [Phrase.SearchLabel]: '搜索',
  [Phrase.SearchSuggestionMythicPlus]: '试试：限时神庙 昨天 +18 牧师 已收藏 强韧',
  [Phrase.SearchSuggestionRaid]: '试试：击杀 今天 正式服 史诗 毁灭 已收藏',
  [Phrase.SearchSuggestionBattlegrounds]: '试试：战歌峡谷 已收藏',
  [Phrase.SearchSuggestionSoloShuffle]: '试试：达拉然 6-0 已收藏',
  [Phrase.SearchSuggestionDefault]: '试试：胜利 谜团 熔炉 奥术 已收藏',  
  [Phrase.ShowRoundsLabel]: '显示回合',
  [Phrase.ShowDeathsLabel]: '显示死亡',
  [Phrase.ShowEncountersLabel]: '显示首领战',
  [Phrase.FullScreenTooltip]: '全屏',
  [Phrase.PlaybackSpeedTooltip]: '回放速度',
  [Phrase.ClipTooltip]: '剪辑',
  [Phrase.ClipUnavailableTooltip]: '只能剪辑本地保存的视频',
  [Phrase.ConfirmTooltip]: '确认',
  [Phrase.CancelTooltip]: '取消',
  [Phrase.TagButtonTooltip]: '添加标签',
  [Phrase.StarButtonTooltip]: '标记为永久保留',
  [Phrase.UnstarButtonTooltip]: '取消永久保留',
  [Phrase.OpenFolderButtonTooltip]: '打开位置',
  [Phrase.DeleteButtonTooltip]: '删除',
  [Phrase.BulkDeleteButtonTooltip]: '删除选中项',
  [Phrase.ShareLinkButtonTooltip]: '获取可分享的链接',
  [Phrase.CloudButtonTooltip]: '使用云端版本',
  [Phrase.DiskButtonTooltip]: '使用本地磁盘版本',
  [Phrase.UploadButtonTooltip]: '上传至云端',
  [Phrase.DownloadButtonTooltip]: '下载到本地',
  [Phrase.StatusTitleRecording]: '正在录制',
  [Phrase.StatusTitleWaiting]: '等待中',
  [Phrase.StatusTitleInvalid]: '无效',
  [Phrase.StatusTitleReady]: '已就绪',
  [Phrase.StatusTitleFatalError]: '错误',
  [Phrase.StatusTitleOverrunning]: '额外录制中',
  [Phrase.StatusTitleReconfiguring]: '重新配置中',
  [Phrase.StatusDescriptionRecording]: 'Warcraft Recorder 当前正在录制',
  [Phrase.StatusDescriptionForceEnd]: '你可以强制结束录制。通常无需这样做，但在某些情况下可用于结束无法正常完成的大秘境录制。',
  [Phrase.StatusDescriptionWaiting]: '正在等待魔兽世界启动',
  [Phrase.StatusDescriptionConfiguredToRecord]: 'Warcraft Recorder 已配置好录制',
  [Phrase.StatusDescriptionMisconfigured]: 'Warcraft Recorder 配置错误',
  [Phrase.StatusDescriptionResolveError]: '请解决以下错误',
  [Phrase.StatusDescriptionDetectedRunning]: '检测到魔兽世界正在运行',
  [Phrase.StatusDescriptionWatchingLogs]: 'Warcraft Recorder 正在等待可录制的战斗日志事件。监控的日志路径如下',
  [Phrase.StatusDescriptionTip]: '提示',
  [Phrase.StatusDescriptionIfNoRecording]: '如果没有开始录制，请检查游戏内的日志设置，并确认你配置的日志路径正确。',
  [Phrase.StatusDescriptionFatalError]: 'Warcraft Recorder 遇到致命错误',
  [Phrase.StatusDescriptionPleaseResolve]: '请尝试解决以下错误，然后重启应用程序。',
  [Phrase.StatusDescriptionIfRecurring]: '如果此问题一直发生，请在 Discord 中寻求帮助。查看 #help 频道顶部的固定帖子了解如何获取帮助。',
  [Phrase.StatusDescriptionOverrunning]: 'Warcraft Recorder 检测到活动已完成，正在额外录制几秒钟以捕捉收尾。',
  [Phrase.StatusDescriptionNothing]: '无。你可能需要在游戏设置中启用一些游戏模式。',
  [Phrase.StatusHeading]: '状态',
  [Phrase.StatusButtonForceEndLabel]: '强制停止',
  [Phrase.Retail]: '正式服',
  [Phrase.Classic]: '怀旧服',
  [Phrase.Era]: '旧世服',
  [Phrase.MicListeningTooltip]: '监听中',
  [Phrase.MicMutedTooltip]: '已静音',
  [Phrase.CrashHappenedText]: 'OBS 出现崩溃并已自动恢复。通常不应该发生。你可能需要在 Discord 中分享 WR 和 OBS 日志以寻求帮助。',
  [Phrase.SettingsPageApplicationHeader]: '应用程序',
  [Phrase.SettingsPageGameHeader]: '游戏',
  [Phrase.SettingsPageProHeader]: '专业版',
  [Phrase.UpdateAvailableTitle]: '有可用更新！',
  [Phrase.UpdateAvailableText]: 'Warcraft Recorder 有可用更新。请点击下面的按钮下载。',
  [Phrase.UpdateAvailableDownloadButtonText]: '下载',
  [Phrase.TestButtonHeading]: '选择一个要测试的分类',
  [Phrase.SystemTrayOpen]: '打开',
  [Phrase.SystemTrayQuit]: '退出',
  [Phrase.Kill]: '击杀',
  [Phrase.Wipe]: '团灭',
  [Phrase.Win]: '胜利',
  [Phrase.Loss]: '失败',
  [Phrase.Abandoned]: '放弃',
  [Phrase.Depleted]: '未限时',
  [Phrase.AreYouSure]: '确定吗？',
  [Phrase.ThisWillPermanentlyDelete]: '这将永久删除',
  [Phrase.RecordingsFullStop]: '个录制文件。',
  [Phrase.ThisSelectionIncludes]: '所选内容包含',
  [Phrase.StarredRecordingNotDeleted]: '个标记为永久保留的录制文件，这些不会被删除。',
  [Phrase.Hold]: '按住',
  [Phrase.ToSkip]: '可跳过今后此提醒。',
  [Phrase.Death]: '死亡',
  [Phrase.AddADescription]: '添加说明',
  [Phrase.TagDialogText]: '此说明可在搜索框中使用。',
  [Phrase.Clear]: '清除',
  [Phrase.Save]: '保存',
  [Phrase.ShareableLinkTitle]: '可分享链接已生成并复制到剪贴板',
  [Phrase.ShareableLinkText]: '此链接将在 30 天内有效',
  [Phrase.ShareableLinkFailedTitle]: '生成链接失败',
  [Phrase.ShareableLinkFailedText]: '详情请查看日志',
  [Phrase.CloudUsage]: '云端使用情况',
  [Phrase.DiskUsage]: '磁盘使用情况',
  [Phrase.Hardware]: '硬件',
  [Phrase.Software]: '软件',
  [Phrase.All]: '全部',
  [Phrase.Own]: '自己的',
  [Phrase.None]: '无',
  [Phrase.On]: '开',
  [Phrase.Off]: '关',
  [Phrase.Ultra]: '超高',
  [Phrase.High]: '高',
  [Phrase.Moderate]: '中',
  [Phrase.Low]: '低',
  [Phrase.LFR]: '随机团队',
  [Phrase.Normal]: '普通',
  [Phrase.Heroic]: '英雄',
  [Phrase.Mythic]: '史诗',
  [Phrase.Pvp]: 'PvP',
  [Phrase.ErrorAccountEmpty]: '账号名称不能为空。',
  [Phrase.ErrorPasswordEmpty]: '账号密码不能为空。',
  [Phrase.ErrorGuildEmpty]: '公会名称不能为空。',
  [Phrase.ErrorUserNotAuthorizedPlayback]: '该用户无权访问此公会。',
  [Phrase.ErrorUserNotAuthorizedUpload]: '该用户无权向此公会上传视频。',
  [Phrase.ErrorStoragePathInvalid]: '存储路径无效。',
  [Phrase.ErrorBufferPathInvalid]: '缓冲文件存储路径无效。',
  [Phrase.ErrorStoragePathSameAsBufferPath]: '存储路径与缓冲路径相同。',
  [Phrase.ErrorCustomOverlayNotAllowed]: '要使用自定义覆盖层，请启用云端存储。',
  [Phrase.ErrorNoCustomImage]: '未提供自定义覆盖层所需的图像文件。',
  [Phrase.ErrorCustomImageFileType]: '覆盖层图像必须是 .png 或 .gif 文件。',
  [Phrase.ErrorCustomImageNotExist]: '指定的文件不存在。',
  [Phrase.InvalidRetailLogPath]: '无效的正式服日志路径。',
  [Phrase.InvalidClassicLogPath]: '无效的怀旧服日志路径。',
  [Phrase.InvalidEraLogPath]: '无效的经典旧世服日志路径。',
  [Phrase.SelectAnOutputDevice]: '请选择一个输出设备',
  [Phrase.SelectAnInputDevice]: '请选择一个输入设备',
  [Phrase.ClickToSelectAll]: '单击以选择全部',
  [Phrase.ClickToSortAsc]: '点击升序排序',
  [Phrase.ClickToSortDec]: '点击降序排序',
  [Phrase.ClickToClearSort]: '单击以清除排序',
};

export default CHINESE_SIMPLIFIED;
