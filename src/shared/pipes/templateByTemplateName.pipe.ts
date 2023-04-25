import { Pipe, PipeTransform, QueryList, TemplateRef, isDevMode } from '@angular/core';
import { TemplateNameDirective } from 'src/shared/directives/templateName.directive';

@Pipe({
  name: 'templateByTemplateName',
  standalone: true,
})
export class TemplateByTemplateNamePipe implements PipeTransform {

  transform(templates: QueryList<TemplateNameDirective> | null | undefined, templateName: string): TemplateRef<TemplateNameDirective> | null | undefined {
    const templatesArr = templates?.toArray();

    if (!Array.isArray(templatesArr) || !templatesArr.length) {
      return null;
    }
    const template = templatesArr.find(t => t?.templateName == templateName)?.templateRef;
    console.log('templatesArr', templatesArr,template)

    return template || null;
  }

}
