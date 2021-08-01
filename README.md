# Setup

With this Gatsby template you can host a simple event

### Install gatsby

```powershell
npm install gatsby-cli -g
```

### Clone the template

```powershell
git clone https://github.com/ltwlf/gatsby-event-template.git my-event
```

### Install packages and run the demo

```powershell
cd my-event

npm install

gatsby develop

```

Open http://localhost:8000

# Customize

- Open 'gatsby-config.js' and change the **siteMetadata** as needed
- Replace the following images in **src/images/**
  - logo.png
  - hero.png
  - icon.png (must be a square)
- Customize the Homepage -> **src/pages/index.mdx**
- Create sessions -> Modify and copy the demo sessions in **src/sessions/**
- Run with **gatsby develop**

## Azure Videos/Live Streams

The template contains a Azure Media Video Player component which you can add to any MDX page:

```jsx
<VideoPlayer url="http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest" />
```

Create a git repo and push your customized site

## Publish

```powershell
gatsby build
```

Deploy the **publish** folder to a static website, e.g. Blob Storage. You can use Visual Studio Code, Azure CLI or a build pipeline
