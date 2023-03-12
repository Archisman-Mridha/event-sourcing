import * as InboundAdapters from "./Adapters/Inbound/Index"

function main( ){

    let grpcAdapter= InboundAdapters.GrpcAdapter.create( )
        grpcAdapter.startServer( )
}

main( )