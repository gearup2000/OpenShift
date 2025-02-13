<p align="center">
  <img src="yoda.png" width="1150" title="yoda">
</p>


Creating a project in OpenShift: `oc new-project star-wars`

Creating a configMap with nginx configuration: `oc create configmap nginx-conf --from-file=$(pwd)\nginx-cm\nginx.conf`

Creating a configMap with html `oc create configmap nginx-html --from-file=$(pwd)\nginx-cm\index.html`

Creating the remaining resources `oc apply -f .\quote-app.yaml`
