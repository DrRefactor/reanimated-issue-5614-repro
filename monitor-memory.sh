#!/bin/bash -e

highest_memory_usage=0
adb shell top -b -m5 | awk '/com.reanimatedleaktest/ {print $6 "\t" $11; fflush()}' |
  while read line; do
    echo "$line"
    memory_usage="${line%%[^0-9]*}"
    if (( memory_usage > highest_memory_usage )); then
      highest_memory_usage=$memory_usage
    fi
    now=`date +”%H:%M:%S”`
    echo "[$now]: peak memory: $highest_memory_usage"
  done
