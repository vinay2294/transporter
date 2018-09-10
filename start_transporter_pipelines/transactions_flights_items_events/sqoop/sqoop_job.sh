#!/bin/bash
sqoop job --create transactions_flights_items_events_v1_import \
-- \
import \
--connect "jdbc:postgresql://plplatform-postgres01.travel.paytm:5432/flights" \
--table transactions_flights_items_events_v1 \
--driver org.postgresql.Driver \
-m 1 \
--target-dir "/user/sqoop/warehouse/flights/transactions_flights_items_events_v1" \
--incremental append \
--check-column _id \
--hive-import \
--hive-database flights \
--hive-table transactions_flights_items_events_v1 \
--verbose
