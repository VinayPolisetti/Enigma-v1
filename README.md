## Google Cloud-Based Secure File Storage & Sharing System (Enigma)

## Abstract

The following project encompasses the ability to hold user data securely with the help
of cloud-based storage services.

The Google Cloud-Based Secure File Storage System aims to provide a secure and
reliable file storage solution for individuals and organizations using the Google Cloud
Platform. The system uses advanced encryption and access control mechanisms to
ensure stored files' confidentiality, integrity, and availability. The project incorporates
Google Cloud to provide a robust storage and access control solution. The system's key
features include data encryption, role-based access control, and data backup. This
project aims to provide a scalable and cost-effective solution for secure file storage in
the cloud, suitable for a wide range of use cases, including personal, enterprise, and
government applications.

The popularity of cloud storage has increased significantly in recent years, and more
and more individuals and businesses are using cloud storage services like Google Drive
to store their important data. However, security is a significant concern when it comes
to cloud storage as data is stored on servers outside of the user's control. Thus, it is
crucial to ensure that the data stored in the cloud is encrypted and secure from any
possible data leaks.

Enigma is a secure cloud storage application that aims to address this concern by
providing a secure way to store and share files on Google Drive. The application utilizes
a combination of asymmetric and symmetric encryption to secure files stored in the
cloud. The user's private key is encrypted with AES and stored with their account, and
the group private key is encrypted with the owner's public key.

The application also allows users to create and manage groups, and files can be
uploaded and downloaded to the group folder. All files are encrypted when uploaded
and decrypted when downloaded, ensuring that data is protected at all times. The
application is easy to use, and users can log in with their Google Account, and a folder
named SECURE is created in the user's root folder of Google Drive upon login.


## Architecture 
![Logo](https://github.com/VinayPolisetti/Enigma-v1/blob/main/assets/image_1.jpg?raw=true)

The user interacts with a website which acts as a client for any API calls made for the
user. Prisma ORM is a modern, type-safe database toolkit that simplifies database
access and management for application developers. Prisma is used to access the
MySQL database associated with the project to get important data that gets stored. The
files will get uploaded to the cloud server after encryption and decrypted at the front
end which gets returned to the user. The website is written with the help of react.js and
next.js. They are equipped with all the necessary features to create the required website
with all the functionalities required.

A Sequence Diagram below which demonstrates the working of the project in detail
and the use, and duties of various entities involved

![Logo](https://github.com/VinayPolisetti/Enigma-v1/blob/main/assets/image_2.jpg?raw=true)

The visual representation of the Cryptography involved with the project is displayed
below –

![Logo](https://github.com/VinayPolisetti/Enigma-v1/blob/main/assets/image_3.jpg?raw=true)

The Technical Description of the Cryptography involved with the project is displayed
in the table below –
1. User account created
i. Public and private Keys are created for the user. \
ii. The user's private key is encrypted with AES with the user's account.\
iii. The public & encrypted private user keys are stored with the user's account. \
iv. The SECURE folder is created on Google Drive and the ID of the folder is
stored with the user.

2. Group created
i. Public and private keys are created for the group. \
ii. The group private key is encrypted with the owner's public key. \
iii. The group public key is stored with the group and the encrypted private key is
stored with the user and links back to the group. \
iv. The group folder is created in the owner's folder and the group folder ID is
stored with the group. 

3. User added to a group
i. The user decrypts their own private key with their session. \
ii. The user decrypts the group’s private key with their decrypted private key. \
iii. The group private key is encrypted with the public key of the user that is being
added. \
iv. The group folder is shared with the user through Google Drive. 

4. User removed from the group
i. The user's connection to the group is removed and their encrypted access to the
group’s private key is removed. \
ii. The user is unshared from the Google Drive folder.

5. File Uploaded
i. The file is encrypted with the group's public key on the upload. \
ii. The file is uploaded to the group folder in Google Drive.

6. File Download
i. The user decrypts their own private key with their session. \
ii. The user decrypts the group’s private key with their decrypted private key. \
iii. The decrypted group private key is then used to decrypt the file. \
iv. Decrypted file is then sent to the user.

## Results and Conclusions
![Logo](https://github.com/VinayPolisetti/Enigma-v1/blob/main/assets/image_7.png?raw=true)
![Logo](https://github.com/VinayPolisetti/Enigma-v1/blob/main/assets/image_8.png?raw=true)
![Logo](https://github.com/VinayPolisetti/Enigma-v1/blob/main/assets/image_9.png?raw=true)