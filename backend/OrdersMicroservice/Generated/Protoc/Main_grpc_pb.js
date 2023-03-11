// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var CreateOrder_pb = require("./CreateOrder_pb.js");

function serialize_OrdersService_CreateOrderRequest(arg) {
    if (!(arg instanceof CreateOrder_pb.CreateOrderRequest)) {
        throw new Error(
            "Expected argument of type OrdersService.CreateOrderRequest"
        );
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_OrdersService_CreateOrderRequest(buffer_arg) {
    return CreateOrder_pb.CreateOrderRequest.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

function serialize_OrdersService_CreateOrderResponse(arg) {
    if (!(arg instanceof CreateOrder_pb.CreateOrderResponse)) {
        throw new Error(
            "Expected argument of type OrdersService.CreateOrderResponse"
        );
    }
    return Buffer.from(arg.serializeBinary());
}

function deserialize_OrdersService_CreateOrderResponse(buffer_arg) {
    return CreateOrder_pb.CreateOrderResponse.deserializeBinary(
        new Uint8Array(buffer_arg)
    );
}

var OrdersGrpcServiceService = (exports.OrdersGrpcServiceService = {
    createOrder: {
        path: "/OrdersService.OrdersGrpcService/CreateOrder",
        requestStream: false,
        responseStream: false,
        requestType: CreateOrder_pb.CreateOrderRequest,
        responseType: CreateOrder_pb.CreateOrderResponse,
        requestSerialize: serialize_OrdersService_CreateOrderRequest,
        requestDeserialize: deserialize_OrdersService_CreateOrderRequest,
        responseSerialize: serialize_OrdersService_CreateOrderResponse,
        responseDeserialize: deserialize_OrdersService_CreateOrderResponse,
    },
});

exports.OrdersGrpcServiceClient = grpc.makeGenericClientConstructor(
    OrdersGrpcServiceService
);
