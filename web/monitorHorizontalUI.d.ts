import { ProgressBarUIBase } from './progressBarUIBase.js';
export declare class MonitorHorizontalUI extends ProgressBarUIBase {
    private monitorCPUElement;
    private monitorRAMElement;
    private monitorHDDElement;
    private monitorGPUSettings;
    private monitorVRAMSettings;
    private monitorTemperatureSettings;
    private currentRate;
    constructor(monitorCPUElement: TMonitorSettings, monitorRAMElement: TMonitorSettings, monitorHDDElement: TMonitorSettings, monitorGPUSettings: TMonitorSettings[], monitorVRAMSettings: TMonitorSettings[], monitorTemperatureSettings: TMonitorSettings[], currentRate: number, showSection: boolean);
    createDOM: () => void;
    createDOMGPUMonitor: (monitorSettings?: TMonitorSettings) => void;
    orderMonitors: () => void;
    updateAllWidget: () => void;
    updateWidget: (monitorSettings: TMonitorSettings) => void;
    updateDisplay: (data: TStatsData) => void;
    updateMonitor: (monitorSettings: TMonitorSettings, percent: number) => void;
    updateAllAnimationDuration: (value: number) => void;
    updatedAnimationDuration: (monitorSettings: TMonitorSettings, value: number) => void;
    createMonitor: (monitorSettings?: TMonitorSettings) => HTMLDivElement;
}
