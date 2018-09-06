#!/bin/bash

TRANSPORT_ROOTDIR=`dirname "$0"`
TRANSPORT_ROOTDIR=`( cd "$TRANSPORT_ROOTDIR" && pwd )`
echo $TRANSPORT_ROOTDIR

export TRANSPORT_ROOTDIR=$TRANSPORT_ROOTDIR

if [[ ! -n $1 ]]; then
	echo "Please enter env prod or local";
fi
if [[ $1 == 'prod' ]]; then
	$TRANSPORT_ROOTDIR/bin/transporter run $TRANSPORT_ROOTDIR/config/prod_pipeline.js
fi
if [[ $1 = 'local' ]]; then
	$TRANSPORT_ROOTDIR/bin/transporter run $TRANSPORT_ROOTDIR/config/local_pipeline.js
fi
