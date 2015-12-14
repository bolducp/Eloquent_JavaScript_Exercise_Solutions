/* Write a loop that makes seven calls to console.log to output the following triangle:

 #
 ##
 ###
 ####
 #####
 ######
 ####### */


function looping() {
    var hashes = ""
    for (var num=1; num < 8; num++) {
        hashes += "#";
        console.log(hashes);
    }
}
looping();