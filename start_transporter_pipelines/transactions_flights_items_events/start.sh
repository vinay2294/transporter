#!/bin/bash

if [[ ! -n $1 ]]; then
	echo "Please enter env prod or local";
fi
if [[ $1 == 'prod' ]]; then
	./bin/prod_transporter run ./config/prod_pipeline.js
fi
if [[ $1 = 'local' ]]; then
	./bin/local_transporter run ./config/local_pipeline.js
fi
