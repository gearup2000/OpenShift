# OpenShift Star Wars Quote App

This project demonstrates a simple Star Wars quote application deployed on OpenShift. The application consists of an Nginx server serving a static HTML page and a Node.js service providing random Yoda quotes.

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
