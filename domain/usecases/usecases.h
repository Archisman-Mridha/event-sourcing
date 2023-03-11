#include <string>
#include "../repository/product.repository.h"

using namespace std;

#ifndef USECASE_H
    #define USECASES_H

    class UsecasesLayer {
        private:
            repositories::Product* productRepository;

        public:
            UsecasesLayer(repositories::Product* productRepository)
                : productRepository(productRepository)
            { }

            void shipProduct(string productName, int quantity) {
                auto productAggregate= productRepository->fetch(productName);

                productAggregate->shipProduct(quantity);
            }

            void receiveProduct(string productName, int quantity) {
                auto productAggregate= productRepository->fetch(productName);

                productAggregate->receiveProduct(quantity);
            }

            void adjustInventory(string productName, int quantity, string reason) {
                auto productAggregate= productRepository->fetch(productName);

                productAggregate->adjustInventory(quantity=quantity, reason=reason);
            }
    };
#endif