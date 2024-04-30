export function dateFormmatter(date: any) {
  return date?.seconds ? date?.toDate().toLocaleDateString() : date?.toLocaleDateString()
}
