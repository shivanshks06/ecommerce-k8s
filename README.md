# 🚀 Cloud-Native E-Commerce (DevOps Project)

A **production-style cloud-native microservices application** built to demonstrate real-world DevOps practices including **CI/CD, containerization, Kubernetes orchestration, auto-scaling, and cloud deployment**.

---

## 🌟 Key Highlights

* 🔧 **Microservices Architecture** (Auth, Product, Order, Payment, Frontend)
* 🐳 **Dockerized Services** (multi-stage builds)
* ☸️ **Kubernetes Deployment (k3s)** with:

  * Deployments
  * Services
  * Ingress (Traefik)
  * HPA (Auto Scaling)
* 🔁 **CI/CD Pipeline using Jenkins**
* ☁️ **Deployed on AWS EC2**
* 🔐 **JWT-based Authentication**
* 📈 **Auto Scaling with HPA**
* 🌐 **Ingress-based Routing**

---

## 🏗️ Architecture

```
User → Frontend (Nginx)
        ↓
     Ingress (Traefik)
        ↓
 ┌───────────────┬───────────────┬───────────────┐
 │   Auth        │   Product     │    Order      │
 │   Service     │   Service     │   Service     │
 └───────────────┴───────────────┴───────────────┘
                    ↓
              Payment Service
                    ↓
               Kubernetes Cluster
                    ↓
               Docker Images
                    ↓
                 Jenkins CI/CD
```

---

## 🧱 Project Structure

```
ecommerce-k8s/
 ├── services/
 │    ├── frontend/
 │    ├── auth/
 │    ├── product/
 │    ├── order/
 │    └── payment/
 │
 ├── k8s/
 │    ├── deployments/
 │    ├── services/
 │    ├── ingress/
 │    ├── hpa/
 │    └── namespace.yml
 │
 ├── jenkins/
 │    └── Jenkinsfile
 │
 └── README.md
```

---

## ⚙️ Tech Stack

| Layer         | Technology                      |
| ------------- | ------------------------------- |
| Frontend      | HTML / JS                       |
| Backend       | Node.js (Express)               |
| Container     | Docker                          |
| Orchestration | Kubernetes (k3s)                |
| CI/CD         | Jenkins                         |
| Cloud         | AWS EC2                         |
| Networking    | Ingress (Traefik)               |
| Scaling       | HPA (Horizontal Pod Autoscaler) |

---

## 🚀 CI/CD Pipeline

### 🔁 Flow

```
GitHub Push
   ↓
Jenkins Pipeline
   ↓
Docker Build (all services)
   ↓
Push to Docker Hub
   ↓
Kubernetes Deployment
   ↓
Auto Rollout + Scaling
```

---

### 🧪 Pipeline Stages

* Clone repository
* Build Docker images
* Push images to Docker Hub
* Deploy to Kubernetes
* Apply:

  * Namespace
  * Deployments
  * Services
  * Ingress
  * HPA
* Rollout restart
* Verify cluster state

---

## ☸️ Kubernetes Features Used

* ✅ Deployments (multi-service)
* ✅ Services (ClusterIP)
* ✅ Ingress routing (Traefik)
* ✅ Namespace isolation
* ✅ HPA (CPU-based auto scaling)
* ✅ Rolling updates
* ✅ Internal service communication

---

## 📈 Auto Scaling (HPA)

* CPU-based scaling
* Dynamic pod scaling under load
* Real-time traffic simulation supported

---

## 🔐 Security

* JWT-based authentication
* Service-level access control
* Token-based request validation

---

## 🌐 API Endpoints

| Service | Endpoint                        |
| ------- | ------------------------------- |
| Auth    | `/auth/register`, `/auth/login` |
| Product | `/products`                     |
| Order   | `/order`, `/order/orders`       |
| Payment | `/payment`                      |

---

## 🚀 How to Run (Local / EC2)

### 1. Clone Repo

```bash
git clone https://github.com/<your-username>/ecommerce-k8s.git
cd ecommerce-k8s
```

---

### 2. Build & Run (Docker)

```bash
docker build -t <image> ./services/<service>
docker run ...
```

---

### 3. Deploy to Kubernetes

```bash
kubectl apply -f k8s/namespace.yml
kubectl apply -f k8s/deployments/
kubectl apply -f k8s/services/
kubectl apply -f k8s/ingress/
kubectl apply -f k8s/hpa/
```

---

### 4. Access Application

```
http://<EC2-PUBLIC-IP>
```

---

## 🧠 Key Learnings

* End-to-end CI/CD pipeline design
* Container orchestration with Kubernetes
* Service communication in microservices
* Debugging distributed systems
* Production-level DevOps workflow

---



Give it a ⭐ on GitHub!
