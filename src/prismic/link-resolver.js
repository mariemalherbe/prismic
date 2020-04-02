export default function (doc) {
    if (doc.type === 'home') {
      return '/home';
    }
    if (doc.type === 'nude'){
      return '/nude/' + doc.uid;
    }
    return '/';
}