import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  newsList = [
    {
      id: 1,
      title: 'Cập nhật luật thuế 2024: Những thay đổi quan trọng cho doanh nghiệp',
      date: '2024-03-15',
      summary: 'Tìm hiểu các thay đổi mới trong chính sách thuế năm 2024 ảnh hưởng đến kế toán doanh nghiệp.',
      category: 'Thuế'
    },
    {
      id: 2,
      title: 'Hướng dẫn lập báo cáo tài chính theo chuẩn IFRS',
      date: '2024-03-10',
      summary: 'Bài viết chi tiết về quy trình lập báo cáo tài chính theo tiêu chuẩn quốc tế.',
      category: 'Kế toán'
    },
    {
      id: 3,
      title: 'Xu hướng kế toán số hóa trong doanh nghiệp Việt Nam',
      date: '2024-03-05',
      summary: 'Khám phá cách công nghệ đang thay đổi ngành kế toán và kiểm toán.',
      category: 'Kế toán'
    },
    {
      id: 4,
      title: 'Giảm thuế cho doanh nghiệp nhỏ: Cơ hội và thách thức',
      date: '2024-02-28',
      summary: 'Phân tích lợi ích và cách áp dụng chính sách giảm thuế cho doanh nghiệp nhỏ.',
      category: 'Thuế'
    },
    {
      id: 5,
      title: 'Kiểm toán nội bộ: Vai trò quan trọng trong quản trị rủi ro',
      date: '2024-02-20',
      summary: 'Tìm hiểu về vai trò của kiểm toán nội bộ trong việc quản lý rủi ro doanh nghiệp.',
      category: 'Kiểm toán'
    }
  ];
}
