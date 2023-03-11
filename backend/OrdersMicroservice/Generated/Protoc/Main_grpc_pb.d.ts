// package: OrdersService
// file: Main.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as Main_pb from "./Main_pb";
import * as CreateOrder_pb from "./CreateOrder_pb";

interface IOrdersGrpcServiceService
    extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrder: IOrdersGrpcServiceService_ICreateOrder;
}

interface IOrdersGrpcServiceService_ICreateOrder
    extends grpc.MethodDefinition<
        CreateOrder_pb.CreateOrderRequest,
        CreateOrder_pb.CreateOrderResponse
    > {
    path: "/OrdersService.OrdersGrpcService/CreateOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<CreateOrder_pb.CreateOrderRequest>;
    requestDeserialize: grpc.deserialize<CreateOrder_pb.CreateOrderRequest>;
    responseSerialize: grpc.serialize<CreateOrder_pb.CreateOrderResponse>;
    responseDeserialize: grpc.deserialize<CreateOrder_pb.CreateOrderResponse>;
}

export const OrdersGrpcServiceService: IOrdersGrpcServiceService;

export interface IOrdersGrpcServiceServer
    extends grpc.UntypedServiceImplementation {
    createOrder: grpc.handleUnaryCall<
        CreateOrder_pb.CreateOrderRequest,
        CreateOrder_pb.CreateOrderResponse
    >;
}

export interface IOrdersGrpcServiceClient {
    createOrder(
        request: CreateOrder_pb.CreateOrderRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: CreateOrder_pb.CreateOrderResponse
        ) => void
    ): grpc.ClientUnaryCall;
    createOrder(
        request: CreateOrder_pb.CreateOrderRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: CreateOrder_pb.CreateOrderResponse
        ) => void
    ): grpc.ClientUnaryCall;
    createOrder(
        request: CreateOrder_pb.CreateOrderRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: CreateOrder_pb.CreateOrderResponse
        ) => void
    ): grpc.ClientUnaryCall;
}

export class OrdersGrpcServiceClient
    extends grpc.Client
    implements IOrdersGrpcServiceClient
{
    constructor(
        address: string,
        credentials: grpc.ChannelCredentials,
        options?: Partial<grpc.ClientOptions>
    );
    public createOrder(
        request: CreateOrder_pb.CreateOrderRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: CreateOrder_pb.CreateOrderResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public createOrder(
        request: CreateOrder_pb.CreateOrderRequest,
        metadata: grpc.Metadata,
        callback: (
            error: grpc.ServiceError | null,
            response: CreateOrder_pb.CreateOrderResponse
        ) => void
    ): grpc.ClientUnaryCall;
    public createOrder(
        request: CreateOrder_pb.CreateOrderRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
            error: grpc.ServiceError | null,
            response: CreateOrder_pb.CreateOrderResponse
        ) => void
    ): grpc.ClientUnaryCall;
}
