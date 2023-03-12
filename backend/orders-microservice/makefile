OUTPUT_DIRECTORY=./Generated/Protoc

protoc-generate:
	rm -rf ./Generated/Protoc
	mkdir -p ./Generated/Protoc

	protoc \
		-I=./Proto \
		--plugin=protoc-gen-ts=../../node_modules/.bin/protoc-gen-ts \
		--plugin=protoc-gen-grpc=../../node_modules/.bin/grpc_tools_node_protoc_plugin \
		--js_out=import_style=commonjs:$(OUTPUT_DIRECTORY) \
		--grpc_out=grpc_js:$(OUTPUT_DIRECTORY) \
		--ts_out=grpc_js:$(OUTPUT_DIRECTORY) \
		--descriptor_set_out=$(OUTPUT_DIRECTORY)/descriptor.bin \
			./Proto/*.proto

	prettier --write $(OUTPUT_DIRECTORY)