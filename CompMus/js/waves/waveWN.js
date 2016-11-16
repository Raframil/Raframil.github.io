function buildWaveHeader() {
    var numFrames = 50000;
    var numChannels = 1;
    var sampleRate = 96000;
    var bytesPerSample = 4;
    var blockAlign = numChannels * bytesPerSample;
    var byteRate = sampleRate * blockAlign;
    var dataSize = numFrames * blockAlign;

    var buffer = new ArrayBuffer(bytesPerSample*numFrames+44);
    var dv = new DataView(buffer);

    var p = 0;

    function writeString(s) {
        for (var i = 0; i < s.length; i++) {
            dv.setUint8(p + i, s.charCodeAt(i));
        }
        p += s.length;
    }

    function writeUint16(d) {
        dv.setUint16(p, d, true);
        p += 2;
    }
   
    function writeUint32(d) {
        dv.setUint32(p, d, true);
        p += 4;
    }
	function writeFloat32(d) {
        dv.setFloat32(p, d, true);
        p += 4;
    }
	function writeFloat64(d) {
        dv.setFloat64(p, d, true);
        p += 8;
    }
	
    writeString('RIFF');              // ChunkID
    writeUint32(dataSize + 36);       // ChunkSize
    writeString('WAVE');              // Format
    writeString('fmt ');              // Subchunk1ID
    writeUint32(16);                  // Subchunk1Size
    writeUint16(3);                   // AudioFormat
    writeUint16(numChannels);         // NumChannels
    writeUint32(sampleRate);          // SampleRate
    writeUint32(byteRate);            // ByteRate
    writeUint16(blockAlign);          // BlockAlign
    writeUint16(bytesPerSample * 8);  // BitsPerSample
    writeString('data');              // Subchunk2ID
    writeUint32(dataSize);            // Subchunk2Size
	
    //Gerar silencio
    /*
    for(var i = 0; i < numFrames; i++){
        writeFloat32(0);
    }*/

    
    //Gerar o White Noise
    /*
    var output;
    for (var channel = 0; channel < numChannels; channel++) {
        for (var i = 0; i < numFrames; i++) {
            output = Math.random()*2-1;
            writeFloat32(output);
        }
    }*/

    //Gerar onda quadrada
    /*
    for(i=0;i<numFrames;){
        writeFloat32(1.00);
        i++;
        writeFloat32(1.00);
        i++;
        writeFloat32(-1.00);
        i++;
        writeFloat32(-1.00);
        i++;
    }*/

    //Gerar onda sinoide
    var data;
    var v;
    for(i = 0; i < numFrames; i++){
        for(data = -1; data < 1; data + 0.25){
            v = Math.sin(data);
            writeFloat32(v);
        }
    }

    var blob = new Blob([buffer]);
    //saveAs(blob, "Silencio.wav"); 
    //saveAs(blob, "Wnoise.wav"); 
    //saveAs(blob, "ondaquadrada.wav"); 
    saveAs(blob, "Sinoide.wav"); 

    return buffer;
}
