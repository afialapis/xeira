#!/bin/bash
# 
reset_and_prepare_pkg() {
  PREVDIR=$PWD
  cd tests/$1
  npm run --silent x-prepare
  cd $PREVDIR
}

for TEST_PATH in tests/*
do
  TEST=$(basename "$TEST_PATH")
  echo "Preparing $TEST"
  reset_and_prepare_pkg $TEST
done
