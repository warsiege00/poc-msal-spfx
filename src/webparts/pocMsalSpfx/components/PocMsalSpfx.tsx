import * as React from 'react';
import { IPocMsalSpfxProps } from './IPocMsalSpfxProps';
import { PublicClientApplication } from "@azure/msal-browser";

export default class PocMsalSpfx extends React.Component<IPocMsalSpfxProps, {}> {
  
 
  constructor(props: any) {
    super(props);
    
    const tenantUrl = `2c376903-077d-469a-b1cc-ac8c926eec1e`;

    const msalConfig = {
      auth: {
        authority: `https://login.microsoftonline.com/${tenantUrl}`,
        clientId: `baadb909-4645-4dd2-957e-5933f4d8b5cb`,
        redirectUri: `https://pirainedev365.sharepoint.com/_layouts/15/workbench.aspx`
      }
    };
     
    const msalInstance = new PublicClientApplication(msalConfig);
    console.log(msalInstance);
  }
  public render(): React.ReactElement<IPocMsalSpfxProps> {
  
  

    return (
      <div>teste</div>
    );
  }
}
