#include <string>
#include <map>
#include "../events/events.h"
#include "../aggregates/product.aggregate.h"

using namespace std;

#ifndef PRODUCT_REPOSITORY_H
    #define PRODUCT_REPOSITORY_H
    namespace repositories {

        class Product {
            private:
                map<string, vector<events::Event>> eventStore;

            public:
                aggregates::Product* fetch(string productName) {
                    auto product= new aggregates::Product(productName);

                    // replay the events
                    auto iterator= this->eventStore.find(productName);
                    if(iterator != this->eventStore.end( ))
                        for(auto event: iterator->second)
                            product->replayEvent(event);

                    return product;
                }

                void save(aggregates::Product* product) {
                    if(this->eventStore.find(product->name) == this->eventStore.end( ))
                        this->eventStore[product->name]= product->getEvents( );

                    auto uncommittedEvents= product->getUncommittedEvents( );
                    for(auto uncommittedEvent: uncommittedEvents)
                        this->eventStore[product->name].push_back(uncommittedEvent);
                    product->flushUncommittedEvents( );
                }
        };
    }
#endif