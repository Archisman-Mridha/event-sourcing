// package: OrdersService
// file: CreateOrder.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateOrderRequest extends jspb.Message {
    getRestaurantid(): string;
    setRestaurantid(value: string): CreateOrderRequest;
    getConsumerid(): string;
    setConsumerid(value: string): CreateOrderRequest;
    clearOrderedproductsList(): void;
    getOrderedproductsList(): Array<OrderedProduct>;
    setOrderedproductsList(value: Array<OrderedProduct>): CreateOrderRequest;
    addOrderedproducts(value?: OrderedProduct, index?: number): OrderedProduct;

    hasDeliveryaddress(): boolean;
    clearDeliveryaddress(): void;
    getDeliveryaddress(): Address | undefined;
    setDeliveryaddress(value?: Address): CreateOrderRequest;
    getDeliverydeadline(): string;
    setDeliverydeadline(value: string): CreateOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: CreateOrderRequest
    ): CreateOrderRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: CreateOrderRequest,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
    static deserializeBinaryFromReader(
        message: CreateOrderRequest,
        reader: jspb.BinaryReader
    ): CreateOrderRequest;
}

export namespace CreateOrderRequest {
    export type AsObject = {
        restaurantid: string;
        consumerid: string;
        orderedproductsList: Array<OrderedProduct.AsObject>;
        deliveryaddress?: Address.AsObject;
        deliverydeadline: string;
    };
}

export class CreateOrderResponse extends jspb.Message {
    getOrderid(): string;
    setOrderid(value: string): CreateOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: CreateOrderResponse
    ): CreateOrderResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: CreateOrderResponse,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderResponse;
    static deserializeBinaryFromReader(
        message: CreateOrderResponse,
        reader: jspb.BinaryReader
    ): CreateOrderResponse;
}

export namespace CreateOrderResponse {
    export type AsObject = {
        orderid: string;
    };
}

export class OrderedProduct extends jspb.Message {
    getProductid(): string;
    setProductid(value: string): OrderedProduct;
    getQuantity(): number;
    setQuantity(value: number): OrderedProduct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderedProduct.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: OrderedProduct
    ): OrderedProduct.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: OrderedProduct,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): OrderedProduct;
    static deserializeBinaryFromReader(
        message: OrderedProduct,
        reader: jspb.BinaryReader
    ): OrderedProduct;
}

export namespace OrderedProduct {
    export type AsObject = {
        productid: string;
        quantity: number;
    };
}

export class Address extends jspb.Message {
    getStreet(): string;
    setStreet(value: string): Address;
    getCity(): string;
    setCity(value: string): Address;
    getState(): string;
    setState(value: string): Address;
    getZip(): string;
    setZip(value: string): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: Address,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(
        message: Address,
        reader: jspb.BinaryReader
    ): Address;
}

export namespace Address {
    export type AsObject = {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}
