# OpenShift Star Wars Quote App

This project demonstrates a simple Star Wars quote application deployed on OpenShift. The application consists of an Nginx server serving a static HTML page and a Node.js service providing random Yoda quotes.

<p align="center">
  <img src="./star wars/yoda.png" width="1150" title="yoda">
</p>

## Project Structure

- `nginx-cm/`
  - `index.html`: The HTML file served by Nginx.
  - `nginx.conf`: The Nginx configuration file.
  - `yoda.png`: An image of Yoda used in the README.
- `service/`
  - `Dockerfile`: The Dockerfile for the Node.js quote service.
  - `index.js`: The Node.js application serving random Yoda quotes.
- `quote-app.yaml`: OpenShift configuration file for deploying the application.
- `README.md`: Project documentation.

## Install OpenShift

Go to [Red Hat OpenShift Local (formerly Red Hat CodeReady Containers)](https://developers.redhat.com/products/openshift-local/overviewhttps:/), press Install OpenShift on your laptop.
Note!!! The registration is required.

From top choice **Local** and follow the installation instruction.

Open PowerShell **WITHOUT** Administator priviligies.

run `crc setup` to install the local OpenShift cluster.

Wait until you see the outputs that the cluster it's started and credentials are provided.

Example of output

```
INFO Adding crc-admin and crc-developer contexts to kubeconfig...
Started the OpenShift cluster.

The server is accessible via web console at:
  https://console-openshift-console.apps-crc.testing

Log in as administrator:
  Username: kubeadmin
  Password: *****-*****-*****-*****

Log in as user:
  Username: developer
  Password: developer

Use the 'oc' command line interface:
  PS> & crc oc-env | Invoke-Expression
  PS> oc login -u developer https://api.crc.testing:6443
PS C:\Users\Admin>
```
The server is accessible via web console at: https://console-openshift-console.apps-crc.testing

Run `crc oc-env | Invoke-Expression` to activate OpenShift Client tool.

## Deployment Instructions

1. Create a new project in OpenShift:

   ```sh
   oc new-project star-wars
   ```
2. Create a configMap with Nginx configuration:

   ```sh
   oc create configmap nginx-conf --from-file=$(pwd)\nginx-cm\nginx.conf
   ```
3. Create a configMap with HTML:

   ```sh
   oc create configmap nginx-html --from-file=$(pwd)\nginx-cm\index.html
   ```
4. Create the remaining resources:

   ```sh
   oc apply -f .\quote-app.yaml
   ```
5. The installed application is accessible by http://quote.apps-crc.testing/ page.

6. Removing resources

   ```
   oc delete -f .\quote-app.yaml
   ```
   
   Delete project
   
   ```
   oc delete project star-wars
   ```
   
   Stop cluster

   ```
   crc stop
   ```