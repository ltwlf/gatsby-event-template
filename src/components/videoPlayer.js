import * as React from "react"
import { AzureMP } from "react-azure-mp"

export const VideoPlayer = ({ url }) => (
  <AzureMP
    skin="amp-flush"
    src={[
      {
        src:
          url ||
          "http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest",
        type: "application/vnd.ms-sstr+xml",
      },
    ]}
  />
)
