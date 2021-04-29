#!/bin/bash
docker build -t asia.gcr.io/<PROJECT-ID>/lab-nat-network:dev .
docker push asia.gcr.io/<PROJECT-ID>/lab-nat-network:dev
gcloud run deploy lab-nat --image asia.gcr.io/<PROJECT-ID>/lab-nat-network:dev --platform managed --allow-unauthenticated --port 8080 --vpc-connector=sl-vpc-vega --vpc-egress=all
