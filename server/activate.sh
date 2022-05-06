function do-serverless() {
  doppler run --project lowcode-nest-serverless -c dev -- serverless $@
}

function do-serverless-deploy() {
  do-serverless deploy --org=thuongdinh --app=lowcode-nest-serverless
}