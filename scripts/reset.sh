#!/bin/bash
# 
reset_and_prepare_pkg() {
  PREVDIR=$PWD
  cd tests/packages/$1
  npm run --silent x-prepare
  cd $PREVDIR
}

for TEST_PATH in tests/packages/*
do
  TEST=$(basename "$TEST_PATH")
  reset_and_prepare_pkg $TEST
done
