var source = mongodb({
  "uri": "mongodb://plflightsdb03.travel.paytm:27017/flights_travel_db"
  "timeout": "30s",
  "tail": true,
   "ssl": false,
  // "cacerts": ["/path/to/cert.pem"],
  // "wc": 1,
  //"fsync": true,
  // "bulk": false,
  // "collection_filters": "{}",
  "read_preference": "Secondary"
})

var sink = postgres({
  "uri": "postgres://paytm_travel:Paytm$Travel@mongo-transactions.cyufiargq8ua.ap-southeast-1.rds.amazonaws.com:5432/flights?sslmode=false",
  "ssl": false,
  "debug": true,
  "tail": true,
  // "replication_slot": "slot"
})

t.Config({"log_dir":"/home/vinay_16168/vinay/transporter-pipeline/offsets/", "compaction_interval": "600s", "max_segment_bytes": 50000000})
.Source("source", source, "flights.items")
.Transform(goja({"filename":"/home/vinay_16168/vinay/transporter-pipeline/transforms/prod_transform_flights.js"}))
// - enable it to print transformed output
// .Transform(pretty({"spaces":0}))
.Save("sink", sink, "flights.items")



// var source = mongodb({
//   "uri": "mongodb://127.0.0.1:8081/flights_travel_db?replicaSet=travel"
//   // "timeout": "30s",
//   "tail": true,
//    "ssl": false,
//   // "cacerts": ["/path/to/cert.pem"],
//   // "wc": 1,
//   //"fsync": true,
//   // "bulk": false,
//   // "collection_filters": "{}",
//   // "read_preference": "Primary"
// })
//
// var sink = postgres({
//   "uri": "postgres://paytm_travel:Paytm$Travel@127.0.0.1:8080/flights?sslmode=false"
//   "ssl": false,
//   "debug": true,
//   "tail": true,
//   // "replication_slot": "slot"
// })
//
// t.Config({"log_dir":"/Users/vinaykumar/go/bin/offsets/", "compaction_interval": "30s", "max_segment_bytes": 2000000})
// .Source("source", source, "flights.items")
// .Transform(goja({"filename":"/Users/vinaykumar/go/bin/transform_flights.js"}))
// // - enable it to print transformed output
// // .Transform(pretty({"spaces":0}))
// .Save("sink", sink, "flights.items")
//
