liveness-readiness-startup

Este proyecto es una demostración práctica de Liveness, Readiness y Startup Probes en Kubernetes.

Descripción

- Liveness Probe: Permite a Kubernetes detectar si el contenedor está vivo o si necesita ser reiniciado.
- Readiness Probe: Indica si el contenedor está listo para recibir tráfico.
- Startup Probe: Controla el proceso de arranque de la aplicación, útil para aplicaciones que tardan en iniciar.

Cómo usar

1. Construir la imagen Docker:
   docker build -t probe-demo .

2. Aplicar el manifiesto de Kubernetes:
   kubectl apply -f manifest.yml

3. Verificar el estado del pod:
   kubectl get pods -w

4. Ver logs del pod:
   kubectl logs -f probe-demo

Archivos incluidos

- Dockerfile: Define la imagen de Docker para la aplicación demo.
- manifest.yml: Manifiesto de Kubernetes con configuración de probes.
- server.js: Código fuente del servidor que responde a las probes.

Requisitos

- Docker
- Minikube o un cluster Kubernetes
- Kubectl configurado para tu cluster

---

¡Listo para practicar probes y entender mejor cómo Kubernetes maneja la salud y disponibilidad de los contenedores!

---

Autor: Alephdjcs
