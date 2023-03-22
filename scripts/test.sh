#!/bin/bash
# 
test_pkg() {
  PREVDIR=$PWD
  cd tests/$1
  echo ""
  echo "Testing $1..."
  npm run --silent x-run
  cd $PREVDIR
}

for TEST_PATH in tests/*
do
  TEST=$(basename "$TEST_PATH")
  test_pkg $TEST
done
