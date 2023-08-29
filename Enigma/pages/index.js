import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import PageLayout from "../src/PageLayout";
import Footer from "../src/Footer";

export default function Index() {
  return (
    <PageLayout>
      <br />
      <Typography variant="h3" gutterBottom>
        Enigma
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Encrypt your files on Google Drive and share them securely!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enigma is a secure cloud storage application that secures files stored on Google Drive.
        Users can log in with their Google Account. Upon login, a folder named SECURE will be
        created in your root folder of Google Drive. When you create a group, a folder will
        be created in your SECURE folder. You can add & remove users from these groups.
        Files can be uploaded and downloaded to the group. All the files are encrypted
        when uploaded and decrypted when downloaded. If someone were to download the file
        from Google Drive, they would not be able to decrypt the file.
      </Typography>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '48vh' }}>
        <img src="https://i.ibb.co/HncFCYc/DALL-E-2023-03-22-19-32-37-A-clean-image-of-a-modern-looking-enigma-machine-that-is-connected-to-clo.png" alt="My Image" style={{ width: '50%', height: 'auto' }} />
      </div>
      <Footer />
    </PageLayout>
  );
}
