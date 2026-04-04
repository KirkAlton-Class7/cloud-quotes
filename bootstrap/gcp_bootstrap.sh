#!/bin/bash
set -e

apt-get update
apt-get install -y curl

curl -fsSL https://raw.githubusercontent.com/KirkAlton-Class7/devsecops-vm-dashboard/main/scripts/gcp_vm_script -o /tmp/startup.sh
bash /tmp/startup.sh