export class Post {
  public title: string;
  public created_at: string;
  public slug: string;
  public content: string;
  public published: boolean;
  public updated_at: string;

  constructor(title: string, content: string, publish:boolean) {
    this.title = title;
    this.content = content;
    this.slug = title.toLowerCase().replace(/ /g, "-");
    this.created_at = new Date().toISOString();
    this.published = publish;
  }
}