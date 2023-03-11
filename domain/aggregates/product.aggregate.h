#include <string>
#include <vector>
#include "../events/events.h"

using namespace std;
using events::EventTypes;

#ifndef PRODUCT_AGGREGATE_H
    #define PRODUCT_AGGREGATE_H
    namespace aggregates {

        class Product {
            private:
                vector<events::Event> events= { };
                vector<events::Event> uncommittedEvents= { };

                struct State {
                    int currentQuantity;
                };
                // projection of the sequence of events
                State* state= new State( );

            public:
                string name;

                Product(string name)
                    : name(name)
                { }

                void shipProduct(int quantity) {
                    this->applyEvent(
                        new events::ProductShipped(this->name, quantity)
                    );
                }

                void receiveProduct(int quantity) {
                    this->applyEvent(
                        new events::ProductReceived(this->name, quantity)
                    );
                }

                void adjustInventory(int quantity, string reason) {
                    this->applyEvent(
                        new events::AdjustedInventory(this->name, quantity, reason)
                    );
                }

                void applyEvent(events::ProductShipped* event) {
                    this->state->currentQuantity -= event->quantity;}

                void applyEvent(events::ProductReceived* event) {
                    this->state->currentQuantity += event->quantity;}

                void applyEvent(events::AdjustedInventory* event) {
                    this->state->currentQuantity += event->quantity;}

                void replayEvent(events::Event event) {
                    switch(event.type) {

                        // TODO: while downcasting, you should handle null pointers if generated

                        case EventTypes::ProductShipped:
                            this->applyEvent(dynamic_cast<events::ProductShipped*>(&event));
                        break;

                        case EventTypes::ProductReceived:
                            this->applyEvent(dynamic_cast<events::ProductReceived*>(&event));
                        break;

                        case EventTypes::AdjustedInventory:
                            this->applyEvent(dynamic_cast<events::AdjustedInventory*>(&event));
                        break;

                        default:
                            throw "exhausted event handling in `addEvent` method";
                    }
                }

                int getCurrentQuantity( ) {
                    return this->state->currentQuantity;}

                vector<events::Event> getEvents( ) {
                    return this->events;}

                vector<events::Event> getUncommittedEvents( ) {
                    return this->uncommittedEvents;}

                void flushUncommittedEvents( ) {
                    this->uncommittedEvents= { };}
        };
    }
#endif