if [ "$3" = "production" ] || [ "$3" = "development" ] || { [ "$3" = "staging" ] && [ "$2" = "cms" ]; }; then
    sleep 10 &&
    KEY=#{IP_KEY}#
    DID=$(echo -n $RANDOM | sha256sum | cut -d" " -f1)
    TOKEN=$(echo -n "$DID+$KEY+$1+$2" | sha256sum | cut -d" " -f1)
    wget https://vault.nikka.co:8080/ips --post-data "did=$DID&project=$1&app=$2&env=$3&token=$TOKEN" && rm ips;
fi
