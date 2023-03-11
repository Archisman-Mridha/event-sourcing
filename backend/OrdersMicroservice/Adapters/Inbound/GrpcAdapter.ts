import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall } from "@grpc/grpc-js"
import { addReflection } from "grpc-server-reflection"
import { IOrdersGrpcServiceServer as IOrdersGrpcService, OrdersGrpcServiceService } from "../../Generated/Protoc/Main_grpc_pb"
import { CreateOrderRequest, CreateOrderResponse } from "../../Generated/Protoc/CreateOrder_pb"

export namespace InboundAdapters {

    export class GrpcAdapter {
        private static instance: GrpcAdapter= null

        private server: Server= null

        public startServer( ) {
            let instance= this

            instance.server= new Server( )
            instance.server.addService(OrdersGrpcServiceService, GrpcAdapter.OrderGrpcServiceImplementation)
            addReflection(instance.server, "Generated/Protoc/descriptor.bin")

            instance.server.bindAsync(
                "0.0.0.0:4000",
                ServerCredentials.createInsecure( ),

                function (error, port) {
                    if(error != null)
                        throw error

                    console.info(`starting gRPC server for orders microservice at port ${port}`)
                    instance.server.start( )
                }
            )
        }

        private static OrderGrpcServiceImplementation: IOrdersGrpcService= {

            createOrder(request: ServerUnaryCall<CreateOrderRequest, CreateOrderResponse>, response: sendUnaryData<CreateOrderResponse>) {
                throw new Error("unimplemented")
            }

        }

        public static create( ): GrpcAdapter {
            if(GrpcAdapter.instance == null)
                GrpcAdapter.instance= new GrpcAdapter( )

            return this.instance
        }
    }

}