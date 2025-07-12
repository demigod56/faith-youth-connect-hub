import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.706dad3695f74377b7251294c8402d90',
  appName: 'faith-youth-connect-hub',
  webDir: 'dist',
  server: {
    url: 'https://706dad36-95f7-4377-b725-1294c8402d90.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#1a1a1a",
      showSpinner: true,
      spinnerColor: "#ffffff"
    }
  }
};

export default config;