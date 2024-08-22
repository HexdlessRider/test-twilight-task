export interface ILoggedDevice {
  id: string;
  log_checksum: string;
  log_file_name: string;
  stealer_type: string;
  computer_information: IDevice;
  credentials: ICredentials[];
}

export interface IDevice {
  build_id: string | null;
  infection_date: string;
  ip: string;
  malware_path: string;
  username: string;
  country: string;
  os: string;
  hwid: string;
}

export interface ICredentials {
  url: string;
  creds: {
    username: string;
    password: string;
  }[];
}
