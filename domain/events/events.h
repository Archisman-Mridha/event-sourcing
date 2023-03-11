#include <string>
#include <chrono>
#include "./event.types.h"

using namespace std;
using namespace chrono;

#ifndef EVENTS_H
    #define EVENTS_H
    namespace events {

        struct Event {
            EventTypes type;
            time_t happenedAt=
                            system_clock::to_time_t(system_clock::now( ));

            virtual ~Event( )= default;
        };

        struct ProductShipped: Event {
            EventTypes type= EventTypes::ProductShipped;

            string productName;
            int quantity;

            ProductShipped(string productName, int quantity)
                : productName(productName), quantity(quantity)
            { }
        };

        struct ProductReceived: Event {
            EventTypes type= EventTypes::ProductReceived;

            string productName;
            int quantity;

            ProductReceived(string productName, int quantity)
                : productName(productName), quantity(quantity)
            { }
        };

        struct AdjustedInventory: Event {
            EventTypes type= EventTypes::AdjustedInventory;

            string productName;
            int quantity;
            string reason;

            AdjustedInventory(string productName, int quantity, string reason)
                : productName(productName), quantity(quantity), reason(reason)
            { }
        };
    }
#endif