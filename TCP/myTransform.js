class MyTransformCode{
    constructor(){
        this.packageHeaderLen = 4
        this.serialNum = 0
        this.serialLen = 2

    }

    encode(data, serialNum){
        const body = Buffer.from(data)
        // first apply cache for header
        const headerBuf = Buffer.alloc(this.packageHeaderLen)
        headerBuf.writeInt16BE(serialNum|| this.serialNum)

        headerBuf.writeInt16BE(body.length,this.serialLen)

        if(serialNum == undefined){
            serialNum++
        }

        return Buffer.concat([headerBuf,body])
    }

    decode(buffer){
        const headerBuf = buffer.slice(0,this.packageHeaderLen);
        const bodyBuf = buffer.slice(this.packageHeaderLen);

        return {
            serialNum: headerBuf.readInt16BE(),
            bodyLength:headerBuf.readInt16BE(this.serialLen),
            body:bodyBuf.toString()

        }
    }

    getPackageLen(buffer){
        if (buffer.length < this.packageHeaderLen) {
            return 0
        }else{
            return this.packageHeaderLen+ buffer.readInt16BE(this.serialLen)
        }
    }
}