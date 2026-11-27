#!/usr/bin/env sh
# Upload a demo clip (and optional poster) to the SeaweedFS "demos" bucket.
# Usage: scripts/upload-demo.sh <video.mp4> [poster.jpg]
# Needs the AWS CLI plus:
#   SEAWEEDFS_ACCESS_KEY, SEAWEEDFS_SECRET_KEY
#   MEDIA_ENDPOINT (default https://media.nxdus.com)
set -eu

[ $# -ge 1 ] || { echo "usage: $0 <video.mp4> [poster.jpg]" >&2; exit 1; }

export AWS_ACCESS_KEY_ID="${SEAWEEDFS_ACCESS_KEY:?set SEAWEEDFS_ACCESS_KEY}"
export AWS_SECRET_ACCESS_KEY="${SEAWEEDFS_SECRET_KEY:?set SEAWEEDFS_SECRET_KEY}"
export AWS_DEFAULT_REGION=us-east-1
ENDPOINT="${MEDIA_ENDPOINT:-https://media.nxdus.com}"

# Files are never overwritten in place (rename instead), so cache for a year.
CACHE="public, max-age=31536000, immutable"

aws --endpoint-url "$ENDPOINT" s3 mb s3://demos 2>/dev/null || true

for file in "$@"; do
  aws --endpoint-url "$ENDPOINT" s3 cp "$file" "s3://demos/$(basename "$file")" \
    --cache-control "$CACHE"
  echo "$ENDPOINT/demos/$(basename "$file")"
done
