#include "./domain/repository/product.repository.h"
#include "./domain/usecases/usecases.h"

int main( ) {
    auto productRepsoitory= new repositories::Product( );

    auto usecasesLayer= new UsecasesLayer(productRepsoitory);

    // TODO: you can have a presentation layer here which will trigger commands from the business layer

    return 0;
}