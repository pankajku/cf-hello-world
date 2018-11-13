#!/bin/bash
[[ $# -eq 0 ]] && { echo "Usage:: $0 <command>"; exit 1; }
if [[ "$OSTYPE" == "darwin"* ]]; then
    hash gdate 2>/dev/null || { echo >&2 "gdate not found. Install coreutils."; exit 1; }
    DATECMD=gdate
else
    DATECMD=date
fi
ts=$($DATECMD +%s%N)
out=$($@ 2> /dev/null)
tt=$((($($DATECMD +%s%N) - $ts)/1000000))
echo "$out,$tt"
