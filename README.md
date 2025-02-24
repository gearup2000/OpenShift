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

## Local Deployment Instruction

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

## OpenShift Deployment Instruction

1. Log in to the Red Hat Developer Sandbox:

Go to the Red Hat Developer Sandbox and log in with your Red Hat account.

2. Create a new project:

Open the OpenShift Web Console.
Click on the Home dropdown menu and select Projects, select the project with the name as **YourUsername-dev**.

3. Upload your files to the Developer Sandbox:

In the OpenShift Web Console, navigate to the **Developer** perspective.
Click on **+Add** and select **Import YAML/JSON**.
Copy the contents of your `quote-app.yaml` file and paste it into the editor.
Click **Create** to create the resources.

4. Create ConfigMaps for Nginx configuration and HTML:

Open the OpenShift Web Console.
Navigate to the **Administrator** perspective.
Go to **Workloads > ConfigMaps**.
Click **Create ConfigMap** and enter the following details:
**Name: nginx-conf**
**Key: nginx-conf**
**Data: Copy the contents of your nginx.conf file and paste it into the editor**.
Click **Create**.

Repeat the process to create another ConfigMap:
**Name: nginx-html**
**Key: index.html**
**Data: Copy the contents of your index.html file and paste it into the editor**.
Click **Create**.

5. Deploy the application:

In the OpenShift Web Console, navigate to the **Developer** perspective.
Go to **Topology** to see the deployed resources.
Ensure that the `nginx` and `quote-service` deployments are running.

6. Expose the application:

In the OpenShift Web Console, navigate to the Administrator perspective.
Go to **Networking > Routes**.

You could already see the route with the link *http://quote.apps-crc.testing*

In case there is no route, do the following.

Click **Create Route** and enter the following details:
**Name: quote**
**Service: nginx-service**
**Target Port: 8080 -> 80 (TCP)**
Click **Create**.

7. Access the application:

In the OpenShift Web Console, navigate to **Networking > Routes**.
Find the route you created (quote) and click on the URL to access your application.

8. **To removing resources from OpenShift environment**

Go to the Administrator perspective.
Navigate to Workloads > DeploymentConfigs.
Find the `nginx` and `quote-service` DeploymentConfigs.
Click on each deployment and click on **Actions** > **Delete DeploymentConfig**. Confirm delete.

9. **Delete the ConfigMaps:**
   Navigate to **Workloads** > **ConfigMaps**.
   Find the `nginx-conf` and `nginx-html` ConfigMaps.
   Click on each ConfigMap and select **Actions** > **Delete ConfigMap**.

These steps will remove the deployment and associated resources from your OpenShift environment using the Web Console.
