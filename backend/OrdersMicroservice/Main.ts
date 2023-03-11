import { InboundAdapters } from "./Adapters/Inbound/GrpcAdapter"

function main( ){

    let grpcAdapter= InboundAdapters.GrpcAdapter.create( )
        grpcAdapter.startServer( )
}

main( )