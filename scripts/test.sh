#!/bin/bash
# 
test_pkg() {
  PREVDIR=$PWD
  cd tests/packages/$1
  npm run --silent x-run
  cd $PREVDIR
}

for TEST_PATH in tests/packages/*
do
  TEST=$(basename "$TEST_PATH")
  test_pkg $TEST
done
