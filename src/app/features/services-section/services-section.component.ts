import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-section',
  standalone: true, 
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  imports: [CommonModule, RouterModule] 
})
export class ServicesSectionComponent {
  // Biến kiểm soát trạng thái ẩn/hiện
  isExpanded = false;

  toggleServices() {
    this.isExpanded = !this.isExpanded;
  }

  // Danh sách các dịch vụ bổ sung (theo banner của bạn)
  extraServices = [
    { id: 'cung-cap-nhan-su', icon: 'fas fa-users-cog', title: 'Cung cấp nhân sự', desc: 'Tuyển dụng và đào tạo nhân sự kế toán chuyên môn cao.' },
    { id: 'dao-tao-ke-toan', icon: 'fas fa-graduation-cap', title: 'Đào tạo kế toán', desc: 'Hướng dẫn thực hành kế toán thực tế cho người mới.' },
    { id: 'bao-hiem-xa-hoi', icon: 'fas fa-shield-alt', title: 'Bảo hiểm xã hội', desc: 'Chốt sổ, báo tăng giảm và giải quyết chế độ bảo hiểm.' },
    { id: 'tu-van-quan-tri', icon: 'fas fa-handshake', title: 'Tư vấn quản trị', desc: 'Xây dựng quy trình vận hành tài chính tối ưu cho chủ doanh nghiệp.' },
    { id: 'thay-doi-dkkd', icon: 'fas fa-briefcase', title: 'Thay đổi ĐKKD', desc: 'Thay đổi vốn, ngành nghề, thành viên góp vốn nhanh chóng.' },
    { id: 'khac-dau-chuyen-nghiep', icon: 'fas fa-stamp', title: 'Khắc dấu chuyên nghiệp', desc: 'Dịch vụ làm con dấu pháp lý và dấu chức danh.' }
  ];
}
