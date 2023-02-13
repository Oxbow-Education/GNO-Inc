if [[ "#{BRANCH}#" = "main" ]]; then
    wget https://vault.nikka.co:8080/probes --post-data "key=#{PROBE_KEY}#&project=$1&app=$2&env=production" && rm probes;
fi
