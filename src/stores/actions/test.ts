export default function testAction(count: any = null) {
    return {
        type: 'test',
        count
    }
}